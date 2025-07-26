'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { chatbot } from '@/ai/flows/chatbot';
import { Bot, MessageSquare, Send, X, Loader2 } from 'lucide-react';

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

const initialOptions = [
    { label: "Find Supplies", message: "I want to find supplies" },
    { label: "Become a Vendor", message: "How do I become a vendor?" },
    { label: "Become a Delivery Partner", message: "How do I become a delivery partner?" },
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Welcome to StreetVendorConnect! How can I help you today?",
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (messageText = input) => {
    if (!messageText.trim()) return;

    const userMessage: Message = { text: messageText, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chatbot({ message: messageText });
      const botMessage: Message = { text: response.response, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        sender: 'bot',
        text: "Sorry, I'm having trouble connecting. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error('Chatbot error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleOptionClick = (message: string) => {
    handleSendMessage(message);
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          size="icon"
          className="rounded-full w-14 h-14 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Bot />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50">
          <Card className="w-80 shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2 font-headline">
                <Bot />
                <span>Support Bot</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-80 pr-4">
                <div className="space-y-4">
                  {messages.map((msg, index) => (
                    <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                      {msg.sender === 'bot' && <Bot className="w-6 h-6 flex-shrink-0" />}
                      <div className={`rounded-lg px-3 py-2 max-w-[80%] ${
                          msg.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex items-center gap-2">
                        <Bot className="w-6 h-6 flex-shrink-0" />
                        <div className="bg-muted rounded-lg px-3 py-2">
                            <Loader2 className="w-5 h-5 animate-spin" />
                        </div>
                    </div>
                  )}
                   {messages.length === 1 && (
                     <div className="flex flex-col items-start gap-2 pt-4">
                        {initialOptions.map((opt) => (
                            <Button key={opt.label} variant="outline" size="sm" onClick={() => handleOptionClick(opt.message)}>
                                {opt.label}
                            </Button>
                        ))}
                    </div>
                   )}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex w-full items-center gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}
