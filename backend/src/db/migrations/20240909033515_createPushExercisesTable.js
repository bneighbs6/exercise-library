/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("push_exercises", (table) => {
    table.increments("exercise_id").primary(); // Set exercise_id as primary key
    table.string("exercise_category").defaultTo("Push"); 
    table.string("exercise_name").notNullable().unique(); 
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("push_exercises");
};
