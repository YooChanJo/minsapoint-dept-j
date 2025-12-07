"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function PeriodSelectPage() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const dateInputStyle = {
    background: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
    color: "var(--color-text)",
    padding: "0 16px",
    width: "240px",
    height: "48px",
    boxShadow: "var(--shadow-sm)",
    cursor: "pointer",
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center pt-24"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* 제목 */}
      <h1
        className="text-[36px] font-bold tracking-tight mb-20"
        style={{ color: "var(--color-primary)" }}
      >
        기간 선택
      </h1>

      {/* 날짜 입력 컨테이너 */}
      <div className="flex gap-32 items-center mb-28">
        {/* From */}
        <div className="flex items-center gap-4">
          <span className="text-[32px]">(달력)</span>
          <DatePicker
  selected={startDate}
  onChange={(date) => setStartDate(date)}
  showTimeSelect
  dateFormat="yyyy-MM-dd HH:mm"
  className="w-[240px] h-[48px] px-4 bg-[var(--color-surface)] rounded-md border border-[var(--color-border)] shadow-sm text-[var(--color-text)]"
/>

        </div>

        {/* To */}
        <div className="flex items-center gap-4">
          <span className="text-[32px]">(달력)</span>
<DatePicker
  selected={endDate}
  onChange={(date) => setEndDate(date)}
  showTimeSelect
  dateFormat="yyyy-MM-dd HH:mm"
  className="w-[240px] h-[48px] px-4 bg-[var(--color-surface)] rounded-md border border-[var(--color-border)] shadow-sm text-[var(--color-text)]"
/>

        </div>
      </div>

      {/* Stepper 영역 */}
      <div
        className="w-[80%] p-6"
        style={{
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="flex justify-around items-center pt-10">

          {/* Step 1 완료 */}
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 flex items-center justify-center border"
              style={{
                borderColor: "var(--color-success)",
                borderRadius: "var(--radius-full)",
                color: "var(--color-success)",
              }}
            >
              ✓
            </div>
            <span className="mt-2 text-sm text-gray-600">Step one</span>
          </div>

          <div className="w-40 h-[2px] bg-gray-300"></div>

          {/* Step 2 완료 */}
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 flex items-center justify-center border"
              style={{
                borderColor: "var(--color-success)",
                borderRadius: "var(--radius-full)",
                color: "var(--color-success)",
              }}
            >
              ✓
            </div>
            <span className="mt-2 text-sm text-gray-600">Step two</span>
          </div>

          <div className="w-40 h-[2px] bg-gray-300"></div>

          {/* Step 3 현재 */}
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 flex items-center justify-center border"
              style={{
                borderColor: "var(--color-info)",
                borderRadius: "var(--radius-full)",
                color: "var(--color-info)",
              }}
            >
              ●
            </div>
            <span className="mt-2 text-sm text-gray-600">Step three</span>
          </div>

          <div className="w-40 h-[2px] bg-gray-300"></div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 flex items-center justify-center border"
              style={{
                borderRadius: "var(--radius-full)",
                borderColor: "#aaa",
                color: "#aaa",
              }}
            >
              ○
            </div>
            <span className="mt-2 text-sm text-gray-600">Step four</span>
          </div>
        </div>
      </div>
    </div>
  );
}
