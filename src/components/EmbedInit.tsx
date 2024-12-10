import { LookerEmbedSDK } from "@looker/embed-sdk"

export const EmbedSDKInit = () => {
    LookerEmbedSDK.init(
        import.meta.env.LOOKERSDK_EMBED_HOST,
        {
            url: '/api/auth'
            , headers: [
                { name: 'Amos Mwongela', value: 'user1' }
            ]
        }
    )
}