/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('contact_messages', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.text('message').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('contact_messages');
  }
