"use client";

import React from "react";

export default function LandingPage() {
  // 공통 버튼 스타일
  const blackButtonStyle = {
    backgroundColor: "#000000",
    color: "white",
    borderRadius: "16px",
    fontWeight: 600,
    padding: "16px 32px",
    boxShadow: "var(--shadow-md)",
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center pt-24"
      style={{ backgroundColor: "var(--color-secondary)" }}
    >
      {/* 제목 */}
      <h1
        className="text-[48px] font-bold"
        style={{ color: "var(--color-primary)" }}
      >
        법무부 어쩌고 저쩌고
      </h1>

      {/* 버튼 2개 컨테이너 */}
      <div className="flex gap-16 mt-16">
        <button style={blackButtonStyle}>
          새 법정 시작하기
        </button>

        <button style={blackButtonStyle}>
          상점 반영하기
        </button>
      </div>

      {/* “정의의 여신 사진” 자리 */}
      <p className="mt-4 text-center text-sm text-gray-700">
        (정의의 여신 사진)
      </p>

      {/* 아래 큰 박스 */}
      <div
        className="w-[85%] mt-16 p-8"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        {/* 회차 + 이어가기 */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold">16회 법정</h2>

          <button style={blackButtonStyle}>
            이어가기
          </button>
        </div>

        {/* Stepper */}
        <div className="flex justify-around items-center mt-6">

          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 flex items-center justify-center border"
              style={{
                borderRadius: "var(--radius-full)",
                borderColor: "var(--color-success)",
                color: "var(--color-success)",
              }}
            >
              ✓
            </div>
            <span className="mt-2 text-sm text-gray-700">Step one</span>
          </div>

          <div className="w-40 h-[2px] bg-gray-300"></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 flex items-center justify-center border"
              style={{
                borderRadius: "var(--radius-full)",
                borderColor: "var(--color-success)",
                color: "var(--color-success)",
              }}
            >
              ✓
            </div>
            <span className="mt-2 text-sm text-gray-700">Step two</span>
          </div>

          <div className="w-40 h-[2px] bg-gray-300"></div>

          {/* Step 3 현재 단계 */}
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 flex items-center justify-center border"
              style={{
                borderRadius: "var(--radius-full)",
                borderColor: "var(--color-info)",
                color: "var(--color-info)",
              }}
            >
              ●
            </div>
            <span className="mt-2 text-sm text-gray-700">Step three</span>
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
            <span className="mt-2 text-sm text-gray-700">Step four</span>
          </div>
        </div>
      </div>
    </div>
  );
}
