The usual notation used in [[Circuits]] design

Boolean algebra has
- a set of elements B containing {0,1}
- Binary operations {+, $\cdot$}
- and a unary operation {a'} or {$\bar{a}$}

Translating to boolean algebra:
$\neg p\land(\neg q\land(r\lor s))$ -> $\bar{p}\bar{q}(r+s)$
$(p\land \neg q)\lor(\neg q\land r)$ -> $pq'+q'r$
