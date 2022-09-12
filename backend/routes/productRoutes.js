import express from 'express';
import Product from '../models/ProductModels.js';
import expressAsyncHandler from 'express-async-handler';

const productRouter = express.Router();

productRouter.get('/', 
expressAsyncHandler (async (req, res) => {
  const products = await Product.find();
  res.send(products);
}));

productRouter.get('/slug/:slug', 
expressAsyncHandler (async (req, res) => {
    const product = await Product.findOne({ slug:  req.params.slug  });
    
    if (product){
        res.send(product);
    } else{
        res.status(404).send({message: 'Product Not Found'});
    }
  }));
  
  productRouter.get('/:id', 
  expressAsyncHandler (async(req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  }));


// productRouter.get('/slug/:slug', async (req, res) => {
//     const product = await Product.find(( x) => x.slug === req.params.slug);
//     if (product){
//         res.send(product);
//     } else{
//         res.status(404).send({message: 'Product Not Found'});
//     }
//   });
  
//   productRouter.get('/:id', async (req, res) => {
//     const product = await Product.find((x) => x._id === req.params.id);
//     if (product) {
//       res.send(product);
//     } else {
//       res.status(404).send({ message: 'Product Not Found' });
//     }
//   });

export default productRouter; 