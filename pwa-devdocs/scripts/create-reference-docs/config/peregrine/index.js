module.exports = [
    {
        target: 'peregrine/lib/Price/price.js'
        type: 'class'
    },
    {
        target: 'peregrine/lib/List/list.js',
        type: 'class',
        overrides: {
            items: {
                required: true
            },
            render: {
                required: true
            }
        }
    },
//    {
//        target: 'peregrine/src/hooks/useEventListener.js',
//        type: 'function'
//    },
    {
        target: 'peregrine/src/hooks/useDropdown.js',
        type: 'function'
    },
//    {
//        target: 'peregrine/src/hooks/useWindowSize.js',
//        type: 'function'
//    },
    {
        target: 'peregrine/src/hooks/useApolloContext.js',
        type: 'function'
    },
    {
        target: 'peregrine/src/hooks/useSearchParam.js',
        type: 'function'
    },
    {
        target: 'peregrine/src/hooks/useQuery.js',
        type: 'function'
    },
    {
        target: 'peregrine/src/hooks/useQueryResult.js',
        type: 'function'
    }
];
