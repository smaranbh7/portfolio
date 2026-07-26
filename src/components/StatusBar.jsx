import React, { useEffect, useState } from 'react';

const formatter = new Intl.DateTimeFormat('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'America/New_York',
});

const StatusBar = () => {
  const [time, setTime] = useState(formatter.format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatter.format(new Date())), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hidden sm:flex fixed bottom-0 inset-x-0 h-9 items-center justify-between px-6 sm:px-10 bg-ink/90 backdrop-blur-sm border-t border-border font-mono text-[11px] text-ivory-muted z-40">
      <div className="flex items-center gap-2">
        <span className="relative flex h-1.5 w-1.5">
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-online" />
        </span>
        Software Engineer @ Vitia
      </div>
      <div className="flex items-center gap-4">
        <span>Cincinnati, OH</span>
        <span>{time} ET</span>
      </div>
    </div>
  );
};

export default StatusBar;
