const Curso = require('../models/cursoModel');

exports.create = async (req, res) => {
  try {
    const { nome } = req.body;
    const novoCurso = await Curso.create(nome);
    res.status(201).json(novoCurso);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome } = req.body;
    const cursoAtualizado = await Curso.update(id, nome);
    res.json(cursoAtualizado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await Curso.delete(id);
    res.json({ message: 'Curso deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
