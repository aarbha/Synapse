import React, { useState, useEffect } from 'react';
import { toastEvent } from '../lib/toast';
import { Bell } from 'lucide-react';

export function Toast() {
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);

  useEffect(() => {
    const handleShow = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const id = Date.now();
      setToasts(prev => [...prev, { id, message: customEvent.detail }]);
      
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 3000);
    };

    toastEvent.addEventListener('show', handleShow);
    return () => toastEvent.removeEventListener('show', handleShow);
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
      {toasts.map(toast => (
        <div 
          key={toast.id}
          className="bg-[#172B36] border border-[#114C5A] text-[#F1F6F4] px-4 py-3 rounded-md shadow-2xl flex items-center gap-3 animate-slide-up"
        >
          <Bell className="w-4 h-4 text-[#FFC801]" />
          <span className="text-sm font-medium">{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
