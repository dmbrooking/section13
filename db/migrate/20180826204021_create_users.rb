class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null: false, unique: true
      t.string :last_name, null: false, unique: true
      t.string :email, null: false, index: true, unique: true
      t.string :password_digest
      t.boolean :admin, null: false, default: false
      t.datetime :last_login

      t.timestamps
    end
  end
end
