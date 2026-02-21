"use client";

import * as React from "react";
import { AnimatedInput } from "../AnimatedInput";

export function AnimatedInputExample() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [emailSuccess, setEmailSuccess] = React.useState(false);

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError("");
      setEmailSuccess(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
      setEmailSuccess(false);
    } else {
      setEmailError("");
      setEmailSuccess(true);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">AnimatedInput Component</h1>
          <p className="text-muted-foreground">
            Form inputs with focus animations, floating labels, validation shake, and success indicators
          </p>
        </div>

        <div className="space-y-8">
          {/* Basic Example */}
          <section className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Basic Input</h2>
            <AnimatedInput
              id="name"
              label="Full Name"
              type="text"
              placeholder="John Doe"
            />
          </section>

          {/* Email with Validation */}
          <section className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Email with Validation</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Type an email to see validation in action
            </p>
            <AnimatedInput
              id="email"
              label="Email Address"
              type="email"
              value={email}
              onChange={handleEmailChange}
              error={emailError}
              success={emailSuccess}
              placeholder="you@example.com"
            />
          </section>

          {/* Password Input */}
          <section className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Password Input</h2>
            <AnimatedInput
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="••••••••"
            />
          </section>

          {/* Error State Example */}
          <section className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Error State</h2>
            <AnimatedInput
              id="error-example"
              label="Username"
              type="text"
              error="This username is already taken"
              defaultValue="johndoe"
            />
          </section>

          {/* Success State Example */}
          <section className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Success State</h2>
            <AnimatedInput
              id="success-example"
              label="Username"
              type="text"
              success={true}
              defaultValue="available_username"
            />
          </section>

          {/* Complete Form Example */}
          <section className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Complete Form</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <AnimatedInput
                id="form-name"
                label="Full Name"
                type="text"
                required
              />
              <AnimatedInput
                id="form-email"
                label="Email Address"
                type="email"
                required
              />
              <AnimatedInput
                id="form-phone"
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 000-0000"
              />
              <AnimatedInput
                id="form-company"
                label="Company Name"
                type="text"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground rounded-lg px-4 py-3 font-medium hover:opacity-90 transition-opacity"
              >
                Submit Form
              </button>
            </form>
          </section>

          {/* Features List */}
          <section className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Focus border and glow animation (200ms)</li>
              <li>✓ Floating label animation on focus/value</li>
              <li>✓ Validation error shake animation (400ms)</li>
              <li>✓ Success indicator with scale animation</li>
              <li>✓ Respects prefers-reduced-motion</li>
              <li>✓ Accessible with ARIA attributes</li>
              <li>✓ TypeScript support</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
