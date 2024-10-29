import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail"
import { ApiResponse } from "@/types/ApiResonse";

export async function sendVerificationEmail(
    email : string,
    username:string,
    verifyCode : string
):Promise<ApiResponse>{
   
    try {
        await resend.emails.send({
            from: 'you@example.com',
            to: email,
            subject: 'Next Project | Verify you account',
            react: VerificationEmail({username,otp:verifyCode}),
          });

          return {
            success : true,
            message : "Verification email sent successfully"
        }

    } catch (emailErr) {
        console.log("Error in sending verification email",emailErr)
        return {
            success : false,
            message : "Failed to send verification email"
        }
    }
}