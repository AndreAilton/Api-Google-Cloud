import User from '../models/User.js';
import File from '../models/Fotos.js';

class UserController {
    async store(req, res) {
        try {
            const novoUser = await User.create(req.body);
        return res.status(200).json(novoUser);
        } catch (e) {
        return res.status(400).json({errors:e.errors.map((err) => err.message)});
        };} 
    
    
    
        async index(req, res) {
            try {
                const users = await User.findAll({ attributes: ['id', 'name', 'email'], include: File,  order: [['id', 'DESC'], [File, 'id', 'DESC']]});

                return res.status(200).json(users);
            } catch (e) {
                return res.status(400).json({errors:e.errors.map((err) => err.message)});
                }
        }
        
        async show(req, res) {    
            try {

                const user = await User.findByPk(req.userId,{ attributes: ['id', 'name', 'email'], include: File,  order: [['id', 'DESC'], [File, 'id', 'DESC']]});    
                


                return res.status(200).json(user);
           
            } catch (e) {
                return res.status(400).json({errors:e.errors.map((err) => err.message)});
            }
        }

        async update(req, res) {
            try {
                const user = await User.findByPk(req.userId);
                await user.update(req.body);
                const { id, name, email } = user;
                return res.status(200).json({ id, name, email });
            } catch (e) {
                return res.status(400).json({errors:e.errors.map((err) => err.message)});
                }
        }

        async destroy(req, res) {
            try {
                const user = await User.findByPk(req.userId);
                await user.destroy();
                return res.status(200).json(user);
            } catch (e) {
                return res.status(400).json({errors:e.errors.map((err) => err.message)});
                }
        }

    
    }
export default new UserController();