"use strict";

const db = require('../db');
const { NotFoundError } = require('../expressError');

class Work {
  static async save(data) {
    const {title, username, pixelColorData} = data;
    const res = await db.query(`
      INSERT INTO works (title, author, composition)
      VALUES ($1, $2, $3)
      RETURNING title, author, composition
    `, [title, username, pixelColorData]);

    return res.rows[0];
  };

  static async load(id) {
    const res = await db.query(`
      SELECT id, title, composition
      FROM works
      WHERE id = $1
    `, [id]);

    const work = res.rows[0];
    if (!work) throw new NotFoundError('work not found!');

    return work;
  };

  static async getLatestWorks() {
    const res = await db.query(`
      SELECT id, title, author, composition
      FROM works
      ORDER BY id DESC
      LIMIT 5
    `);
    return res.rows;
  }
};

module.exports = Work;