"use client"
import Image from 'next/image'
import styles from './page.module.css'
import LoginForm from '@/component/Loginpage/Loginpage'
import { googleicon,appleicon } from '@/Assets/commonsvg'
import { googleTapRedirect } from '@/app/api/Mainclient'
import { useSession,signIn,signOut } from 'next-auth/react'
import Link from 'next/link'
export default function Home() {
 

  // const {data : session} = useSession();

   const googlelogin = () =>{
    const url = googleTapRedirect();
    window.location.href = url;
   }

   const applefunc = () =>{
    alert("use Google Login")
   }

  //  if(session){
  //   return(
  //         <div>
  //             <Link href='/dashboard'>Go to dashboard</Link>
  //         </div>
  //   )
  //  }
  //  else {
    return (
      <div className='d-flex h-100vh'>
        <div className={styles.leftsection}>
          <h1>Board.</h1>
        </div>
        <div className={styles.rightsection}>
           <div className={styles.loginsections}>
            <h1>Sign In</h1>
            <span>Sign in to your account</span>
            <div className={styles.loginbtndiv}>
                  <button  onClick={()=>googlelogin()}>{googleicon} Sign in with Google</button>
                  <button onClick={applefunc}>{appleicon} Sign in with Apple</button>
            </div>
           <LoginForm/>
            <div className={styles.btmsec}>
                <span>Don’t have an account? <a>Register here</a></span>
            </div>
           </div>
  
        </div>
      </div>
    )
  //  }
 
}
