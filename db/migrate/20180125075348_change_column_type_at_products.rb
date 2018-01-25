class ChangeColumnTypeAtProducts < ActiveRecord::Migration
  def change    
    change_column :products, :title, :string, null: false
    change_column :products, :price, :integer, null: false
  end
end
