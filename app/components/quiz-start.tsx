"use client";

import { Button } from "@/components/ui/button";
import type { QuestionType } from "@/lib/quiz-types";

interface QuizStartProps {
  onStart: (type: QuestionType) => void;
}

export function QuizStart({ onStart }: QuizStartProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 max-w-md mx-auto text-center px-4">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-bold tracking-tight">購買層クイズ</h1>
        <p className="text-muted-foreground text-sm">
          購入された商品のカテゴリから、その購買層の年代・性別・婚姻状況を予想しよう！
        </p>
      </div>

      <div className="flex flex-col w-full gap-4">
        <Button
          size="lg"
          className="w-full py-6 text-base font-semibold shadow-md flex flex-col items-center justify-center gap-1 h-auto"
          onClick={() => onStart("group")}
        >
          <span>👥 集団モードでスタート</span>
          <span className="text-xs font-normal opacity-80">ある購買層が多く買ったカテゴリTOP5から推測</span>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="w-full py-6 text-base font-semibold border-2 flex flex-col items-center justify-center gap-1 h-auto"
          onClick={() => onStart("individual")}
        >
          <span>👤 個人モードでスタート</span>
          <span className="text-xs font-normal text-muted-foreground">ある1人のユーザーが買った5カテゴリから推測</span>
        </Button>
      </div>
    </div>
  );
}
