
#  json.extract! @tea, :id, :flavor, :price, :description
json.tea do
    json.partial! "tea", tea: @tea
    json.transactionIds @tea.transaction_ids
end

transactions = @tea.transactions.includes(:user)
json.transactions do
    # json.dummy "hello"
    transactions.each do |transaction|
        json.set! transaction.id do
            json.extract! transaction, :id, :quantity, :created_at
            json.customer transaction.user.username
        end
    end
end

# {
#     id: 1,
#     flavor: "",
#     price: "",
#     description: ""
# }