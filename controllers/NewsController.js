// import model news
const News = require("../models/News")

class NewsController {
    async index(req, res) {
        // TODO 4: Tampilkan data news
        const newss = await News.all();

        const data = {
            message: "Menampilkan data news",
            data: newss
        };

        res.status(200).json(data);
    }

    async store(req, res) {
        /**
         * TODO 2: memanggil method create.
         * Method create mengembalikan data yang baru diinsert.
         * Mengembalikan response dalam bentuk json.
         */

        const newss = await news.create(req.body);
        const data = {
            message: "Menambahkan data news",
            data: newss,
        };

        res.status(201).json(data);
    }


    async update(req, res) {
        /**
         * check id news
         * jika ada, lakukan update
         * jika tidak, kirim data tidak ada
         */
        const { id } = req.params;

        const newss = await News.find(id);

        if (newss) {
            // update data
            const newsUpdated = await News.update(id, req.body);
            const data = {
                message: "Mengupdate data news",
                data: newsUpdated,
            };

            res.status(200).json(data);
        }
        else {
            // kirim data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }



    }

    async destroy(req, res) {
        const { id } = req.params;

        /**
         * cari id
         * jika ada, hapus data
         * jika tidak, kirim data tidak ada
         */

        const news = await News.find(id);

        if (news) {
            // hapus data
            await News.delete(id);
            const data = {
                message: "Menghapus data news",
            };

            res.status(200).json(data);
        }
        else {
            // data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }
    }

    async show(req, res) {
        /**
         * cari id
         * jika ada, kirim datanya
         * jika tidak, kirim data tidak ada
         */
        const { id } = req.params;

        const news = await News.find(id);

        if (news) {
            const data = {
                message: "Menampilkan detail data news",
                data: news,
            };

            res.status(200).json(data);
        }
        else {
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }

    }
}

// make an object news Controller
const object = new NewsController();

// export object
module.exports = object;