const User = require('../models/userr')

module.exports = {

    // munculin semua user yang ada
    index: async (req, res) => {
        try {
            const user = await User.find()
            if (user.length > 0) {
                res.status(200).json({
                    status: true,
                    data: user,
                    method: req.method,
                    url: req.url
                })
            } else {
                res.json({
                    status: false,
                    message: "Data masih kosong"
                })
            }
        } catch (error) {
            res.status(400).json({ success: false })
        }
    },

    // cuma munculin 1 user yang dipanggil
    show: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.json({
                status: true,
                data: User,
                method: req.method,
                url: req.url,
                message: "Data berhasil didapat"
            })
        } catch (error) {
            res.status(400).json({ success: false })
        }
    },

    store: async (req, res) => {
        try {
            const user = await User.create(req.body)
            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan"
            })
        } catch (error) {
            res.status(400).json({ success: false })
        }

    },

    // ubah data user
    update: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                new : true,
                runValidators: true
            })
            res.json({
                status: true,
                data: User,
                method: req.method,
                url: req.url,
                message: "Data berhasil diubah"
            })
        } catch (error) {
            res.status(400).json({ success: false })
        }
    },

    // hapus data user
    delete: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data berhasil dihapus"
            })
        } catch (error) {
            res.status(400).json({ success: false })
        }
        const id = req.params.id
    }
}