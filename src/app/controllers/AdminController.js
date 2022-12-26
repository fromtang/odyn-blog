

class NewsController {

    // [GET] /news
    index(req, res) {
      res.render('./admin/');
    }
}
  
module.exports = new AdminController;
