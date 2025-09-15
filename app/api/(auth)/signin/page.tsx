"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <Card className="w-[380px] border-gray-800 bg-neutral-900 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
          <CardDescription>Access your AI ticketing system</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" className="bg-neutral-800 border-gray-700 text-white"/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" className="bg-neutral-800 border-gray-700 text-white"/>
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Sign In</Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center text-sm">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline ml-1">
            Sign Up
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
