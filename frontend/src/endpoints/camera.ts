export const GetImage = async (filename) => {
    try {
        const response = await fetch(
            `http://${import.meta.env.VITE_PI_IP}:${import.meta.env.VITE_API_PORT}/camera/get`, {
                body: JSON.stringify({
                    filename,
                }),
            }
        )

        const data = await response.json()

        if (!response.ok) {
            return data
        }

        return data
    } catch (e) {
        console.error('Error fetching images: ', e)
        throw e
    }
}

export const CaptureImages = async () => {
    try {
        const response = await fetch(
            `http://${import.meta.env.VITE_PI_IP}:${import.meta.env.VITE_API_PORT}/camera/capture`
        )

        const data = await response.json()

        if (!response.ok) {
            return data
        }

        return data
    } catch (e) {
        console.error('Error capturing images: ', e)
        throw e
    }
}

export const ListImages = async () => {
    try {
        const response = await fetch(
            `http://${import.meta.env.VITE_PI_IP}:${import.meta.env.VITE_API_PORT}/camera/list-images`
        )

        const data = await response.json()

        if (!response.ok) {
            return data
        }

        return data
    } catch (e) {
        console.error('Error fetching images list: ', e)
        throw e
    }
}