import cors from "@/root/libs/cors";

export default async (req, res) => {
    try {
        await cors(req, res);

        const manifest_data = {};
        manifest_data.name = "POC";
        manifest_data.short_name = "POC?";
        manifest_data.description = "POC!";

        manifest_data.display = "standalone";
        manifest_data.theme_color = "#000000";
        manifest_data.background_color = "#ffffff";
        manifest_data.orientation = "portrait";

        manifest_data.start_url = "/";
        manifest_data.scope = "/";

        manifest_data.icons = [];
        // manifest_data.icons.push({ src: '/assets/favicon/icon192_masked.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' });
        // manifest_data.icons.push({ src: '/assets/favicon/icon512_masked.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' });
        // manifest_data.icons.push({ src: '/assets/favicon/icon192.png', sizes: '192x192', type: 'image/png' });
        // manifest_data.icons.push({ src: '/assets/favicon/icon512.png', sizes: '512x512', type: 'image/png' });

        return res.status(200).json(manifest_data);
    } catch (error) {
        console.error(error);
        return res.status(error.status || 500).json({
            status: error.status || 500,
            message: error.message || "Algo de errado não está certo",
        });
    }
}