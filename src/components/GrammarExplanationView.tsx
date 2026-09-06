import React from 'react';

interface GrammarExplanationViewProps {
  explanation: string;
}

// Inline formatting helper for quotes „...“, brackets 【...】, and bold **...**
function renderInlineContent(text: string): React.ReactNode {
  if (!text) return null;

  // Split by brackets 【...】, German quotes „...“, standard quotes "...", or markdown bold **...**
  const regex = /(【[^】]+】|„[^“]+“|"[^"]+"|\*\*[^*]+\*\*)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (!part) return null;

    // Highlight 【...】 brackets
    if (part.startsWith('【') && part.endsWith('】')) {
      return (
        <span
          key={index}
          className="inline-block font-bold text-indigo-950 bg-indigo-100/80 px-1.5 py-0.5 rounded text-[14px] mx-0.5 border border-indigo-200/60 shadow-2xs"
        >
          {part}
        </span>
      );
    }

    // Highlight German quotes „...“ or "..."
    if ((part.startsWith('„') && part.endsWith('“')) || (part.startsWith('"') && part.endsWith('"'))) {
      return (
        <span
          key={index}
          className="font-medium text-indigo-700 bg-indigo-50/90 px-1.5 py-0.5 rounded text-[15px] mx-0.5 border border-indigo-100/60"
        >
          {part}
        </span>
      );
    }

    // Bold **...**
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-bold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Default text
    return <span key={index}>{part}</span>;
  });
}

export const GrammarExplanationView: React.FC<GrammarExplanationViewProps> = ({ explanation }) => {
  if (!explanation) return null;

  const lines = explanation.split('\n');

  return (
    <div className="space-y-1.5 text-slate-700 leading-relaxed text-base">
      {lines.map((rawLine, index) => {
        const trimmed = rawLine.trim();

        // 1. Empty line -> Paragraph break spacing
        if (!trimmed) {
          return <div key={index} className="h-2 sm:h-3" aria-hidden="true" />;
        }

        // 2. Numbered section header, e.g. "1.【...】" or "1. ..."
        const numberedMatch = trimmed.match(/^(\d+)[\.、]\s*(.*)$/);
        if (numberedMatch) {
          const num = numberedMatch[1];
          const content = numberedMatch[2];
          return (
            <div key={index} className="pt-3 pb-1 flex items-start gap-2.5">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-indigo-600 text-white text-xs font-bold shrink-0 mt-0.5 shadow-2xs">
                {num}
              </span>
              <div className="font-bold text-slate-900 text-base leading-snug">
                {renderInlineContent(content)}
              </div>
            </div>
          );
        }

        // 3. Sub-bullet / example line, e.g. starts with "* " or "• "
        if (trimmed.startsWith('* ') || trimmed.startsWith('• ')) {
          const content = trimmed.replace(/^[\*•]\s*/, '');
          return (
            <div
              key={index}
              className="ml-6 sm:ml-9 my-1 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-700 text-sm flex items-start gap-2"
            >
              <span className="text-indigo-500 font-bold text-xs mt-0.5 shrink-0">▸</span>
              <div className="leading-relaxed">
                {renderInlineContent(content)}
              </div>
            </div>
          );
        }

        // 4. Main bullet line, e.g. starts with "- "
        if (trimmed.startsWith('- ')) {
          const content = trimmed.replace(/^- \s*/, '');
          return (
            <div key={index} className="flex items-start gap-2.5 ml-2 sm:ml-4 my-1 text-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <div className="leading-relaxed font-medium">
                {renderInlineContent(content)}
              </div>
            </div>
          );
        }

        // 5. Standalone bracket banner, e.g. starts with 【...】
        if (trimmed.startsWith('【') && trimmed.includes('】') && trimmed.length < 50) {
          return (
            <div key={index} className="my-2">
              <div className="inline-block font-bold text-indigo-950 bg-indigo-50 border border-indigo-200/70 px-3 py-1.5 rounded-xl text-base shadow-2xs">
                {renderInlineContent(trimmed)}
              </div>
            </div>
          );
        }

        // 6. Normal paragraph line
        return (
          <p key={index} className="my-1.5 text-slate-700 leading-relaxed text-base">
            {renderInlineContent(rawLine)}
          </p>
        );
      })}
    </div>
  );
};
