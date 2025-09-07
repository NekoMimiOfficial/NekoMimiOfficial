require "nvchad.mappings"
local k, l, api = vim.keymap.set, vim.lsp, vim.api

-- add yours here

local map = vim.keymap.set

map("n", ";", ":", { desc = "CMD enter command mode" })
map("i", "jk", "<ESC>")

local keys_on_attach = function(_, bufnr)
    local bufopts = { noremap = true, silent = true, buffer = bufnr }
        k("n", "gD", l.buf.declaration, bufopts)
        k("n", "gd", l.buf.definition, bufopts)
        k("n", "gI", l.buf.implementation, bufopts)
        k("n", "<leader>D", l.buf.type_definition, bufopts)
        k("n", "gr", l.buf.references, bufopts)
        k("n", "<leader>ca", l.buf.code_action, bufopts)
        k("v", "<leader>ca", l.buf.code_action, bufopts)
end

-- map({ "n", "i", "v" }, "<C-s>", "<cmd> w <cr>")
