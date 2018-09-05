class CreateQuarters < ActiveRecord::Migration[5.2]
  def change
    create_table :quarters do |t|
      t.integer :quarter, null: false
      t.integer :year, null: false
      t.boolean :active, null: false, default: false

      t.timestamps
    end
  end
end
