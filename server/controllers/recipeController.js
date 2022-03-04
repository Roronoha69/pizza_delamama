require('../models/database');
const Category = require('../models/Category')


/**
 * GET / 
 * Homepage
 */

exports.homepage = async(req, res) => {

   

    try {
        const limitNumber = 3;
        const categories = await Category.find({}).limit(limitNumber);



     res.render('index', { title: 'Pizza delamama 👨‍🍳', categories});
    } catch (error) {
        res.status(500).send({message: error.message || "error mon gars" });
    }

}








// async function insertD() {

//     try {
//         await Category.insertMany([
//             {
//                 "name": "Pizza",
//                 "image": "pizza_sansF.png"
//             },
//             {
//                 "name": "Hot dog",
//                 "image": "hot_dog.png"
//             },
//             {
//                 "name": "Burger",
//                 "image": "img_burger.png"
//             }
//         ]);
//     } catch (error) {
//         console.log(error);
//     }
// }

// insertD();