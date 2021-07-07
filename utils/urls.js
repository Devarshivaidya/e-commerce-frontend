export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
 
export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_live_24E048368C97D24F'
export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK  || 'sk_live_67B1CDD975741D64'
export const fromImageToUrl = (image) => {
    if (!image) {
      return "/vercel.svg"; 
    }
    if (image.url.indexOf("/") === 0) {
      return `${API_URL}${image.url}`;
    }
  
    return image.url;
}; 