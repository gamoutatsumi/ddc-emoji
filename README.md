# ddc-emoji

Emoji source of ddc.vim

## Required

- [denops.vim](https://github.com/vim-denops/denops.vim)
- [ddc.vim](https://github.com/Shougo/ddc.vim)

## Configuration

```vim
  " Use emoji source.
  call ddc#custom#patch_global('sources', ['emoji'])

  " Add matching patterns
  call ddc#custom#patch_global('keywordPattern', '[a-zA-Z_:]\w*')

  " Change source options
  call ddc#custom#patch_global('sourceOptions', {
    \ 'emoji': {
    \	  'mark': 'emoji',
    \	  'matchers': ['emoji'],
    \	  'sorters': [],
    \	  },
    \ })
```

## Screenshots

![](https://user-images.githubusercontent.com/47162587/136030859-db5c4c54-cdec-4713-b00d-841f97828b1b.png)
