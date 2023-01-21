import cors from "@/root/libs/cors";

export default async (req, res) => {
    try {
        await cors(req, res);

        const { method, headers, query, body } = req;
        const params = { ...query, ...body };

        if ("GET" === method) {
            // todo get functions
            const users = [];

            users.push({ name: "Raquel AAAA", role: "treineeeeeee" });
            users.push({ name: "Eduardog", role: "treineeeeeee", username: "edgvi10" });

            return res.json({ params, users });
        }

        throw { status: 405, message: "Método não permitido" };
    } catch (error) {
        console.log(error);

        return res.status(error.status || 500).json({
            message: error.message || "Algo errado não está certo",
            error: error
        })
    }
}