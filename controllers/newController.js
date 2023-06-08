exports.render_new_page = async function (req, res, next) {
    try {
        res.render('form', { title: 'New message' });
    } catch (err) {
        return next(err);
    }
};
