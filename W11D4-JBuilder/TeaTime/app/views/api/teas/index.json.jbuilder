
@teas.each do |tea|
    json.set! tea.id do
        # json.id tea.id
        # json.flavor tea.flavor
        # json.price tea.price
        # json.extract! tea, :id, :flavor, :description, :price
        json.partial! "tea", tea: tea
    end
end

# {
#     1: {
#         id: 1, 
#         flavor: "",
#         price: ""
#     },

#     2: {
#         id: 1, 
#         flavor: "",
#         price: ""
#     },

#     3: {
#         id: 1, 
#         flavor: "",
#         price: ""
#     }...
# }