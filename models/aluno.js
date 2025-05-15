const db = require('../config/db');

module.exports = {
  async create(data) {
    const query = 'INSERT INTO alunos (nome, email, curso_id) VALUES ($1, $2, $3)';
    const values = [data.nome, data.email, data.curso_id || null];
    return db.query(query, values);
  },

  async findAll() {
    const result = await db.query('SELECT * FROM alunos ORDER BY id ASC');
    return result.rows;
  },

  async findAllComCurso() {
  const query = `
    SELECT alunos.id, alunos.nome, alunos.email, curso.nome AS curso
    FROM alunos
    LEFT JOIN curso ON alunos.curso_id = curso.id
    ORDER BY alunos.id ASC
  `;
  const result = await db.query(query);
  return result.rows;
},

async findByCurso(curso_id) {
  const query = `
    SELECT alunos.id, alunos.nome, alunos.email
    FROM alunos
    WHERE curso_id = $1
    ORDER BY nome ASC
  `;
  const result = await db.query(query, [curso_id]);
  return result.rows;
},

  async update(id, data) {
    const query = 'UPDATE alunos SET nome = $1, email = $2 WHERE id = $3';
    const values = [data.nome, data.email, id];
    return db.query(query, values);
  },

  async delete(id) {
    const query = 'DELETE FROM alunos WHERE id = $1';
    return db.query(query, [id]);
  }
};

