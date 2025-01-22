import { db } from "../db";

export class TagsService {
  
  static async getTagId(id: any) {
    let connection = await db;
    let response: any = await connection.query(
      `select * from tags where id = ${id}`
    );

    if (response && response.length > 0 && response[0].length > 0)
      return response[0][0];
  }

  static async getTags() {
    let connection = await db;
    let response = await connection.query(`select * from tags`);
    return response[0];
  }

 
  static async createTag(title: string) {
    let connection = await db;

    let response = await connection.query(
      `insert into tags (title) values('${title}')`
    );

    return response[0];
  }

  static async updateTag(title: string, id: any) {
    let connection = await db;

    return await connection.query(
      `update tags set title='${title}' where id = ${id}`
    );
  }

  static async deleteTag(id: any) {
    let connection = await db;
    console.log("Deleting tag with id:", id);

    return connection.query(`delete from tags where id = ${id}`);
  }
}