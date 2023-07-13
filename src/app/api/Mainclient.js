export const googleTapRedirect = () => {
    const client_id = "642100671470-ak2j7qr6902dt7qqc6b34net3vl5o90p.apps.googleusercontent.com";
    const scope = "https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile";
    const callback = "http://localhost:3000/onetap/callback/"
    const googleRes = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${callback}&prompt=consent&response_type=token&client_id=${client_id}&scope=${scope}&access_type=online`;
    return googleRes;
};
  