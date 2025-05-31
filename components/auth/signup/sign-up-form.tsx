'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, Mail, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from '@/components/ui/toast'
import { useAuth } from '@/context/AuthContextUpdated'
import axios from 'axios'

export default function SignUpForm() {
  // const { signup } = useAuth()
  const { toast } = useToast()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    password: '',
    agreeToTerms: false,
  })

  const [user, setUser] = useState()

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   try {
  //     await signup(
  //       formData.name,
  //       formData.email,
  //       formData.mobileNumber,
  //       formData.password
  //     )
  //     toast({
  //       title: `Welcome ${formData.name}`,
  //       description: 'Successfully Account Created',
  //       action: (
  //         <ToastAction altText="Goto schedule to undo">Close</ToastAction>
  //       ),
  //     })
  //   } catch (err) {
  //     toast({
  //       variant: 'destructive',
  //       title: 'Uh oh! Something went wrong.',
  //       description: (err as Error).message,
  //       action: <ToastAction altText="Try again">Try again</ToastAction>,
  //     })
  //   }
  // }

  const handleSubmit = async () => {
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
        name: formData.name,
        email: formData.email,
        mobileNumber: formData.mobileNumber,
        password: formData.password,
      })
      .then((res) => {
        setUser(res.data)
        console.log(user)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleGoogleSignUp = () => {
    console.log('Google sign up clicked')
    // Implement Google sign up logic
  }

  const handleFacebookSignUp = () => {
    console.log('Facebook sign up clicked')
    // Implement Facebook sign up logic
  }

  return (
    <div className="space-y-6">
      {/* main sign up section */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          {/* name */}
          <div className="space-y-2">
            <Label htmlFor="name">Your name</Label>
            <Input
              className=""
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          {/* email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          {/* mobileNumber number */}
          <div className="space-y-2">
            <Label htmlFor="username">Mobile Number</Label>
            <Input
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={(e) =>
                setFormData({ ...formData, mobileNumber: e.target.value })
              }
              required
            />
          </div>

          {/* password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={formData.agreeToTerms}
            onCheckedChange={() =>
              setFormData({ ...formData, agreeToTerms: !formData.agreeToTerms })
            }
          />
          <Label
            htmlFor="terms"
            className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree with{' '}
            <Link
              href="/privacy-policy"
              className="font-medium hover:underline"
            >
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="/terms" className="font-medium hover:underline">
              Terms of Use
            </Link>
          </Label>
        </div>

        <Button
          type="submit"
          disabled={!formData.agreeToTerms}
          className="w-full bg-black hover:bg-black/90 text-white"
        >
          Sign Up
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          type="button"
          disabled
          onClick={handleGoogleSignUp}
          className="flex items-center justify-center gap-2"
        >
          <Mail size={18} />
          <span>Gmail</span>
        </Button>
        <Button
          variant="outline"
          type="button"
          disabled
          onClick={handleFacebookSignUp}
          className="flex items-center justify-center gap-2"
        >
          <Facebook size={18} />
          <span>Facebook</span>
        </Button>
      </div>
    </div>
  )
}
