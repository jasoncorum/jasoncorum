class ContactsController < ApplicationController

	def new
		@contact = Contact.new
	end

	def create
		@contact = Contact.new(contact_params)
		if @contact.save
			redirect_to new_contact_url, notice: "Your message was submitted. Thanks!"
		else
			render :new, notice: "You message was not successfully submitted. Please try again."
		end
	end

	def show
	end


	private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end		

end