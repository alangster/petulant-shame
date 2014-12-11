class CreatePhotos < ActiveRecord::Migration
  def change
  	create_table :photos do |t|
  		t.string :url
  		t.string :insta_id
  		t.float  :price

  		t.timestamps
  	end
  end
end
