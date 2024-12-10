import { LookerEmbedSDK } from "@looker/embed-sdk"

export const EmbedSDKInit = () => {
    console.log( import.meta.env.VITE_LOOKERSDK_EMBED_HOST );
    
    LookerEmbedSDK.init(
        import.meta.env.VITE_LOOKERSDK_EMBED_HOST ,
        {
            url: `${import.meta.env.VITE_API_HOST}/api/auth`
            , headers: [{ name: 'usertoken', value: 'user1' }],
            withCredentials: true, 
        }
    )
    // LookerEmbedSDK.init('https://pesira.cloud.looker.com', 'http://localhost:3000/auth/api')
}