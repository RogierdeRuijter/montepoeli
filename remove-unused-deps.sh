#!/bin/bash
depcheck > data.txt

cat data.txt 

cat data.txt | (while read F
do
    if [[ ${F:0:1} == "*" ]]; then 
        OUTPUT="$(printf "$F" | cut -c 3-)"
        foo="${foo} ${OUTPUT}"
        # echo "pruned ${OUTPUT} from node modules"
    fi
done && npm uninstall $foo);
