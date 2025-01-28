import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { Button } from "@/components/ui/button";

type Message = {
  role: "user" | "bot";
  content: string;
};

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isCodingMode, setIsCodingMode] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const hasAddedSystemMessage = useRef<boolean>(false);

  const removeThinkTags = (content: string) => {
    return content.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
  };

  const processMessageContent = (content: string) => {
    const codeRegex = /```(\w+)?\n([\s\S]+?)```/g;
    let parts = content.split(codeRegex);

    return parts.map((part, index) => {
      if (index % 3 === 2) {
        const codeContent = part.trim();
        return (
          <div key={index} className="relative max-w-full">
            <pre className="bg-black text-white p-3 rounded-md overflow-x-auto max-w-full">
              <code className="whitespace-pre">{codeContent}</code>
            </pre>
            <button
              className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 text-sm rounded"
              onClick={() => navigator.clipboard.writeText(codeContent)}
            >
              복사
            </button>
          </div>
        );
      } else {
        return (
          <ReactMarkdown
            key={index}
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {part}
          </ReactMarkdown>
        );
      }
    });
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    // 한글 입력 오류 방지를 위해 setTimeout을 사용
    setTimeout(() => setInput(""), 0);

    try {
      const requestMessages = hasAddedSystemMessage.current
        ? [...messages, { role: "user", content: input }]
        : [
            {
              role: "system",
              content: "모든 응답을 반드시 한국어로 제공하세요."
            },
            ...messages,
            { role: "user", content: input }
          ];

      hasAddedSystemMessage.current = true;

      const response = await axios.post("http://localhost:11434/api/chat", {
        model: isCodingMode ? "qwen2.5:14b" : "phi4:14b",
        messages: requestMessages,
        stream: false
      });

      const botMessage: Message = {
        role: "bot",
        content: removeThinkTags(response.data.message.content)
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching Ollama response:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "오류가 발생했습니다. 다시 시도해주세요." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey && !loading) {
      event.preventDefault();
      sendMessage();
    } else if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      setInput((prev) => prev + "\n");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Chatbot
      </h1>

      {/* 채팅 컨테이너 */}
      <div className="flex flex-col flex-grow max-w-2xl w-full mx-auto border bg-white shadow-lg rounded-lg">
        <div
          ref={chatContainerRef}
          className="flex-grow overflow-y-auto p-4 h-full"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex mb-2 ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`inline-block max-w-[90%] p-3 rounded-lg break-words whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-blue-100 text-right self-end"
                    : "bg-green-100 text-left self-start"
                }`}
              >
                {processMessageContent(msg.content)}
              </div>
            </div>
          ))}
        </div>

        {/* 입력 필드 및 버튼 */}
        <div className="p-4 bg-gray-50 border-t flex flex-col space-y-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Shift + Enter로 개행, Enter로 전송"
            className="border rounded-lg p-2 resize-none min-h-[80px]"
            rows={3}
          ></textarea>

          {/* 체크박스 */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isCodingMode}
              onChange={(e) => setIsCodingMode(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700">코딩 모드</span>
          </div>

          {/* Send 버튼 */}
          <Button
            onClick={sendMessage}
            disabled={loading}
            className={`bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 font-bold rounded shadow-lg transform transition-transform hover:scale-105 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Loading..." : "Send"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
