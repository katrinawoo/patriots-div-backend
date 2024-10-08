/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('job_applications', function (table) {
      table.increments('id').primary();
      table.integer('job_id').unsigned().references('id').inTable('open_positions').onDelete('CASCADE');
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('linkedin').nullable();
      table.string('links').nullable();
      table.string('resume_path').notNullable();
      table.text('information').nullable();
      table.foreign('job_id').references('id').inTable('open_positions');
      table.timestamps(true, true);
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('job_applications');
  }
