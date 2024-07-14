/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('job_applications', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('linkedin').nullable();
      table.string('links').nullable();
      table.string('resume').notNullable();
      table.text('information').nullable();
      table.integer('job_id').unsigned().notNullable();
      table.foreign('job_id').references('id').inTable('open_positions');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('job_applications');
  };
