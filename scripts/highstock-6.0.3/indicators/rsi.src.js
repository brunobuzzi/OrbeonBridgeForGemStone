/ * * 
   *   @ l i c e n s e     H i g h c h a r t s   J S   v 6 . 0 . 3   ( 2 0 1 7 - 1 1 - 1 4 ) 
   * 
   *   I n d i c a t o r   s e r i e s   t y p e   f o r   H i g h s t o c k 
   * 
   *   ( c )   2 0 1 0 - 2 0 1 7   P a w e B  F u s 
   * 
   *   L i c e n s e :   w w w . h i g h c h a r t s . c o m / l i c e n s e 
   * / 
 ' u s e   s t r i c t ' ; 
 ( f u n c t i o n ( f a c t o r y )   { 
         i f   ( t y p e o f   m o d u l e   = = =   ' o b j e c t '   & &   m o d u l e . e x p o r t s )   { 
                 m o d u l e . e x p o r t s   =   f a c t o r y ; 
         }   e l s e   { 
                 f a c t o r y ( H i g h c h a r t s ) ; 
         } 
 } ( f u n c t i o n ( H i g h c h a r t s )   { 
         ( f u n c t i o n ( H )   { 
 
 
                 v a r   i s A r r a y   =   H . i s A r r a y ; 
 
                 / /   U t i l s : 
                 f u n c t i o n   t o F i x e d ( a ,   n )   { 
                         r e t u r n   p a r s e F l o a t ( a . t o F i x e d ( n ) ) ; 
                 } 
 
                 H . s e r i e s T y p e ( ' r s i ' ,   ' s m a ' , 
                         / * * 
                           *   R e l a t i v e   s t r e n g t h   i n d e x   ( R S I )   t e c h n i c a l   i n d i c a t o r .   T h i s   s e r i e s   r e q u i r e s   ` l i n k e d T o ` 
                           *   o p t i o n   t o   b e   s e t   a n d   s h o u l d   b e   l o a d e d   a f t e r   ` s t o c k / i n d i c a t o r s / i n d i c a t o r s . j s `   f i l e . 
                           * 
                           *   @ e x t e n d s   { p l o t O p t i o n s . s m a } 
                           *   @ p r o d u c t   h i g h s t o c k 
                           *   @ s a m p l e   { h i g h s t o c k }   s t o c k / i n d i c a t o r s / r s i 
                           *                                           R S I   i n d i c a t o r 
                           *   @ s i n c e   6 . 0 . 0 
                           *   @ o p t i o n p a r e n t   p l o t O p t i o n s . r s i 
                           * / 
                         { 
                                 n a m e :   ' R S I   ( 1 4 ) ' , 
                                 / * * 
                                   *   @ e x c l u d i n g   i n d e x 
                                   * / 
                                 p a r a m s :   { 
                                         p e r i o d :   1 4 , 
                                         / * * 
                                           *   N u m b e r   o f   m a x i m u m   d e c i m a l s   t h a t   a r e   u s e d   i n   R S I   c a l c u l a t i o n s . 
                                           * 
                                           *   @ t y p e   { N u m b e r } 
                                           *   @ s i n c e   6 . 0 . 0 
                                           *   @ p r o d u c t   h i g h s t o c k 
                                           * / 
                                         d e c i m a l s :   4 
                                 } 
                         } ,   { 
                                 g e t V a l u e s :   f u n c t i o n ( s e r i e s ,   p a r a m s )   { 
                                         v a r   p e r i o d   =   p a r a m s . p e r i o d , 
                                                 x V a l   =   s e r i e s . x D a t a , 
                                                 y V a l   =   s e r i e s . y D a t a , 
                                                 y V a l L e n   =   y V a l   ?   y V a l . l e n g t h   :   0 , 
                                                 d e c i m a l s   =   p a r a m s . d e c i m a l s , 
                                                 / /   R S I   s t a r t s   c a l c u l a t i o n s   f r o m   t h e   s e c o n d   p o i n t 
                                                 / /   C a u s e   w e   n e e d   t o   c a l c u l a t e   c h a n g e   b e t w e e n   t w o   p o i n t s 
                                                 r a n g e   =   1 , 
                                                 R S I   =   [ ] , 
                                                 x D a t a   =   [ ] , 
                                                 y D a t a   =   [ ] , 
                                                 i n d e x   =   3 , 
                                                 g a i n   =   0 , 
                                                 l o s s   =   0 , 
                                                 R S I P o i n t ,   c h a n g e ,   a v g G a i n ,   a v g L o s s ,   i ; 
 
                                         / /   R S I   r e q u i r e s   c l o s e   v a l u e 
                                         i f   ( 
                                                 ( x V a l . l e n g t h   <   p e r i o d )   | |   ! i s A r r a y ( y V a l [ 0 ] )   | | 
                                                 y V a l [ 0 ] . l e n g t h   ! = =   4 
                                         )   { 
                                                 r e t u r n   f a l s e ; 
                                         } 
 
                                         / /   C a l c u l a t e   c h a n g e s   f o r   f i r s t   N   p o i n t s 
                                         w h i l e   ( r a n g e   <   p e r i o d )   { 
                                                 c h a n g e   =   t o F i x e d ( 
                                                         y V a l [ r a n g e ] [ i n d e x ]   -   y V a l [ r a n g e   -   1 ] [ i n d e x ] , 
                                                         d e c i m a l s 
                                                 ) ; 
 
                                                 i f   ( c h a n g e   >   0 )   { 
                                                         g a i n   + =   c h a n g e ; 
                                                 }   e l s e   { 
                                                         l o s s   + =   M a t h . a b s ( c h a n g e ) ; 
                                                 } 
 
                                                 r a n g e + + ; 
                                         } 
 
                                         / /   A v e r a g e   f o r   f i r s t   n - 1   p o i n t s : 
                                         a v g G a i n   =   t o F i x e d ( g a i n   /   ( p e r i o d   -   1 ) ,   d e c i m a l s ) ; 
                                         a v g L o s s   =   t o F i x e d ( l o s s   /   ( p e r i o d   -   1 ) ,   d e c i m a l s ) ; 
 
                                         f o r   ( i   =   r a n g e ;   i   <   y V a l L e n ;   i + + )   { 
                                                 c h a n g e   =   t o F i x e d ( y V a l [ i ] [ i n d e x ]   -   y V a l [ i   -   1 ] [ i n d e x ] ,   d e c i m a l s ) ; 
 
                                                 i f   ( c h a n g e   >   0 )   { 
                                                         g a i n   =   c h a n g e ; 
                                                         l o s s   =   0 ; 
                                                 }   e l s e   { 
                                                         g a i n   =   0 ; 
                                                         l o s s   =   M a t h . a b s ( c h a n g e ) ; 
                                                 } 
 
                                                 / /   C a l c u l a t e   s m o o t h e d   a v e r a g e s ,   R S ,   R S I   v a l u e s : 
                                                 a v g G a i n   =   t o F i x e d ( 
                                                         ( a v g G a i n   *   ( p e r i o d   -   1 )   +   g a i n )   /   p e r i o d , 
                                                         d e c i m a l s 
                                                 ) ; 
                                                 a v g L o s s   =   t o F i x e d ( 
                                                         ( a v g L o s s   *   ( p e r i o d   -   1 )   +   l o s s )   /   p e r i o d , 
                                                         d e c i m a l s 
                                                 ) ; 
                                                 / /   I f   a v e r a g e - l o s s   i s   e q u a l   z e r o ,   t h e n   b y   d e f i n i t i o n   R S I   i s   s e t   t o   1 0 0 : 
                                                 i f   ( a v g L o s s   = = =   0 )   { 
                                                         R S I P o i n t   =   1 0 0 ; 
                                                         / /   I f   a v e r a g e - g a i n   i s   e q u a l   z e r o ,   t h e n   b y   d e f i n i t i o n   R S I   i s   s e t   t o   0 : 
                                                 }   e l s e   i f   ( a v g G a i n   = = =   0 )   { 
                                                         R S I P o i n t   =   0 ; 
                                                 }   e l s e   { 
                                                         R S I P o i n t   =   t o F i x e d ( 1 0 0   -   ( 1 0 0   /   ( 1   +   ( a v g G a i n   /   a v g L o s s ) ) ) ,   d e c i m a l s ) ; 
                                                 } 
 
                                                 R S I . p u s h ( [ x V a l [ i ] ,   R S I P o i n t ] ) ; 
                                                 x D a t a . p u s h ( x V a l [ i ] ) ; 
                                                 y D a t a . p u s h ( R S I P o i n t ) ; 
                                         } 
 
                                         r e t u r n   { 
                                                 v a l u e s :   R S I , 
                                                 x D a t a :   x D a t a , 
                                                 y D a t a :   y D a t a 
                                         } ; 
                                 } 
                         } 
                 ) ; 
 
                 / * * 
                   *   A   ` R S I `   s e r i e s .   I f   t h e   [ t y p e ] ( # s e r i e s . r s i . t y p e )   o p t i o n   i s   n o t 
                   *   s p e c i f i e d ,   i t   i s   i n h e r i t e d   f r o m   [ c h a r t . t y p e ] ( # c h a r t . t y p e ) . 
                   * 
                   *   F o r   o p t i o n s   t h a t   a p p l y   t o   m u l t i p l e   s e r i e s ,   i t   i s   r e c o m m e n d e d   t o   a d d 
                   *   t h e m   t o   t h e   [ p l o t O p t i o n s . s e r i e s ] ( # p l o t O p t i o n s . s e r i e s )   o p t i o n s   s t r u c t u r e . 
                   *   T o   a p p l y   t o   a l l   s e r i e s   o f   t h i s   s p e c i f i c   t y p e ,   a p p l y   i t   t o   [ p l o t O p t i o n s . 
                   *   r s i ] ( # p l o t O p t i o n s . r s i ) . 
                   * 
                   *   @ t y p e   { O b j e c t } 
                   *   @ s i n c e   6 . 0 . 0 
                   *   @ e x t e n d s   s e r i e s , p l o t O p t i o n s . r s i 
                   *   @ e x c l u d i n g   d a t a , d a t a P a r s e r , d a t a U R L 
                   *   @ p r o d u c t   h i g h s t o c k 
                   *   @ a p i o p t i o n   s e r i e s . r s i 
                   * / 
 
                 / * * 
                   *   A n   a r r a y   o f   d a t a   p o i n t s   f o r   t h e   s e r i e s .   F o r   t h e   ` r s i `   s e r i e s   t y p e , 
                   *   p o i n t s   a r e   c a l c u l a t e d   d y n a m i c a l l y . 
                   * 
                   *   @ t y p e   { A r r a y < O b j e c t | A r r a y > } 
                   *   @ s i n c e   6 . 0 . 0 
                   *   @ e x t e n d s   s e r i e s . l i n e . d a t a 
                   *   @ p r o d u c t   h i g h s t o c k 
                   *   @ a p i o p t i o n   s e r i e s . r s i . d a t a 
                   * / 
 
         } ( H i g h c h a r t s ) ) ; 
 } ) ) ; 
 