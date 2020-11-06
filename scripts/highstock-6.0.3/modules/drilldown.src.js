/ * * 
   *   @ l i c e n s e   H i g h c h a r t s   J S   v 6 . 0 . 3   ( 2 0 1 7 - 1 1 - 1 4 ) 
   *   H i g h c h a r t s   D r i l l d o w n   m o d u l e 
   *   
   *   A u t h o r :   T o r s t e i n   H o n s i 
   *   L i c e n s e :   w w w . h i g h c h a r t s . c o m / l i c e n s e 
   * 
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
                 / * * 
                   *   H i g h c h a r t s   D r i l l d o w n   m o d u l e 
                   *   
                   *   A u t h o r :   T o r s t e i n   H o n s i 
                   *   L i c e n s e :   w w w . h i g h c h a r t s . c o m / l i c e n s e 
                   * 
                   * / 
 
 
                 v a r   n o o p   =   H . n o o p , 
                         c o l o r   =   H . c o l o r , 
                         d e f a u l t O p t i o n s   =   H . d e f a u l t O p t i o n s , 
                         e a c h   =   H . e a c h , 
                         e x t e n d   =   H . e x t e n d , 
                         f o r m a t   =   H . f o r m a t , 
                         o b j e c t E a c h   =   H . o b j e c t E a c h , 
                         p i c k   =   H . p i c k , 
                         w r a p   =   H . w r a p , 
                         C h a r t   =   H . C h a r t , 
                         s e r i e s T y p e s   =   H . s e r i e s T y p e s , 
                         P i e S e r i e s   =   s e r i e s T y p e s . p i e , 
                         C o l u m n S e r i e s   =   s e r i e s T y p e s . c o l u m n , 
                         T i c k   =   H . T i c k , 
                         f i r e E v e n t   =   H . f i r e E v e n t , 
                         i n A r r a y   =   H . i n A r r a y , 
                         d d S e r i e s I d   =   1 ; 
 
                 / /   A d d   l a n g u a g e 
                 e x t e n d ( d e f a u l t O p t i o n s . l a n g ,   { 
                         / * * 
                           *   T h e   t e x t   f o r   t h e   b u t t o n   t h a t   a p p e a r s   w h e n   d r i l l i n g   d o w n ,   l i n k i n g 
                           *   b a c k   t o   t h e   p a r e n t   s e r i e s .   T h e   p a r e n t   s e r i e s '   n a m e   i s   i n s e r t e d   f o r 
                           *   ` { s e r i e s . n a m e } ` . 
                           *   
                           *   @ t y p e   { S t r i n g } 
                           *   @ d e f a u l t   B a c k   t o   { s e r i e s . n a m e } 
                           *   @ s i n c e   3 . 0 . 8 
                           *   @ p r o d u c t   h i g h c h a r t s   h i g h m a p s 
                           *   @ a p i o p t i o n   l a n g . d r i l l U p T e x t 
                           * / 
                         d r i l l U p T e x t :   ' �%  B a c k   t o   { s e r i e s . n a m e } ' 
                 } ) ; 
 
                 / * * 
                   *   O p t i o n s   f o r   d r i l l   d o w n ,   t h e   c o n c e p t   o f   i n s p e c t i n g   i n c r e a s i n g l y   h i g h   
                   *   r e s o l u t i o n   d a t a   t h r o u g h   c l i c k i n g   o n   c h a r t   i t e m s   l i k e   c o l u m n s   o r   p i e   s l i c e s . 
                   * 
                   *   T h e   d r i l l d o w n   f e a t u r e   r e q u i r e s   t h e   d r i l l d o w n . j s   f i l e   t o   b e   l o a d e d ,   
                   *   f o u n d   i n   t h e   m o d u l e s   d i r e c t o r y   o f   t h e   d o w n l o a d   p a c k a g e ,   o r   o n l i n e   a t   
                   *   ( c o d e . h i g h c h a r t s . c o m / m o d u l e s / d r i l l d o w n . j s ) [ c o d e . h i g h c h a r t s . c o m / m o d u l e s / d r i l l d o w n . j s ] . 
                   * 
                   *   @ t y p e   { O b j e c t } 
                   *   @ o p t i o n p a r e n t   d r i l l d o w n 
                   * / 
                 d e f a u l t O p t i o n s . d r i l l d o w n   =   { 
 
                         / * * 
                           *   W h e n   t h i s   o p t i o n   i s   f a l s e ,   c l i c k i n g   a   s i n g l e   p o i n t   w i l l   d r i l l   d o w n 
                           *   a l l   p o i n t s   i n   t h e   s a m e   c a t e g o r y ,   e q u i v a l e n t   t o   c l i c k i n g   t h e   X   a x i s 
                           *   l a b e l . 
                           *   
                           *   @ t y p e   { B o o l e a n } 
                           *   @ s a m p l e   { h i g h c h a r t s }   h i g h c h a r t s / d r i l l d o w n / a l l o w p o i n t d r i l l d o w n - f a l s e / 
                           *                   D o n ' t   a l l o w   p o i n t   d r i l l d o w n 
                           *   @ d e f a u l t   t r u e 
                           *   @ s i n c e   4 . 1 . 7 
                           *   @ p r o d u c t   h i g h c h a r t s 
                           *   @ a p i o p t i o n   d r i l l d o w n . a l l o w P o i n t D r i l l d o w n 
                           * / 
 
 
 
                         / * * 
                           *   S e t   t h e   a n i m a t i o n   f o r   a l l   d r i l l d o w n   a n i m a t i o n s .   A n i m a t i o n   o f   a   d r i l l d o w n 
                           *   o c c u r s   w h e n   d r i l l i n g   b e t w e e n   a   c o l u m n   p o i n t   a n d   a   c o l u m n   s e r i e s , 
                           *   o r   a   p i e   s l i c e   a n d   a   f u l l   p i e   s e r i e s .   D r i l l d o w n   c a n   s t i l l   b e   u s e d 
                           *   b e t w e e n   s e r i e s   a n d   p o i n t s   o f   d i f f e r e n t   t y p e s ,   b u t   a n i m a t i o n   w i l l 
                           *   n o t   o c c u r . 
                           *   
                           *   T h e   a n i m a t i o n   c a n   e i t h e r   b e   s e t   a s   a   b o o l e a n   o r   a   c o n f i g u r a t i o n 
                           *   o b j e c t .   I f   ` t r u e ` ,   i t   w i l l   u s e   t h e   ' s w i n g '   j Q u e r y   e a s i n g   a n d   a   d u r a t i o n 
                           *   o f   5 0 0   m s .   I f   u s e d   a s   a   c o n f i g u r a t i o n   o b j e c t ,   t h e   f o l l o w i n g   p r o p e r t i e s 
                           *   a r e   s u p p o r t e d : 
                           *   
                           *   < d l > 
                           *   
                           *   < d t > d u r a t i o n < / d t > 
                           *   
                           *   < d d > T h e   d u r a t i o n   o f   t h e   a n i m a t i o n   i n   m i l l i s e c o n d s . < / d d > 
                           *   
                           *   < d t > e a s i n g < / d t > 
                           *   
                           *   < d d > A   s t r i n g   r e f e r e n c e   t o   a n   e a s i n g   f u n c t i o n   s e t   o n   t h e   ` M a t h `   o b j e c t . 
                           *   S e e   [ t h e   e a s i n g   d e m o ] ( h t t p : / / j s f i d d l e . n e t / g h / g e t / l i b r a r y / p u r e / h i g h c h a r t s / h i g h c h a r t s / t r e e / m a s t e r / s a m p l e s / h i g h c h a r t s / p l o t o p t i o n s / s e r i e s - 
                           *   a n i m a t i o n - e a s i n g / ) . < / d d > 
                           *   
                           *   < / d l > 
                           *   
                           *   @ t y p e   { B o o l e a n | O b j e c t } 
                           *   @ s i n c e   3 . 0 . 8 
                           *   @ p r o d u c t   h i g h c h a r t s   h i g h m a p s 
                           * / 
                         a n i m a t i o n :   { 
 
                                 / * * 
                                   *   D u r a t i o n   f o r   t h e   d r i l l d o w n   a n i m a t i o n . 
                                   *   @ d e f a u l t   5 0 0 
                                   * / 
                                 d u r a t i o n :   5 0 0 
                         } , 
 
                         / * * 
                           *   O p t i o n s   f o r   t h e   d r i l l   u p   b u t t o n   t h a t   a p p e a r s   w h e n   d r i l l i n g   d o w n 
                           *   o n   a   s e r i e s .   T h e   t e x t   f o r   t h e   b u t t o n   i s   d e f i n e d   i n   [ l a n g . d r i l l U p T e x t ] ( # l a n g . 
                           *   d r i l l U p T e x t ) . 
                           *   
                           *   @ t y p e   { O b j e c t } 
                           *   @ s a m p l e   { h i g h c h a r t s }   h i g h c h a r t s / d r i l l d o w n / d r i l l u p b u t t o n /   D r i l l   u p   b u t t o n 
                           *   @ s a m p l e   { h i g h m a p s }   h i g h c h a r t s / d r i l l d o w n / d r i l l u p b u t t o n /   D r i l l   u p   b u t t o n 
                           *   @ s i n c e   3 . 0 . 8 
                           *   @ p r o d u c t   h i g h c h a r t s   h i g h m a p s 
                           * / 
                         d r i l l U p B u t t o n :   { 
 
                                 / * * 
                                   *   P o s i t i o n i n g   o p t i o n s   f o r   t h e   b u t t o n   w i t h i n   t h e   ` r e l a t i v e T o `   b o x . 
                                   *   A v a i l a b l e   p r o p e r t i e s   a r e   ` x ` ,   ` y ` ,   ` a l i g n `   a n d   ` v e r t i c a l A l i g n ` . 
                                   *   
                                   *   @ t y p e   { O b j e c t } 
                                   *   @ s i n c e   3 . 0 . 8 
                                   *   @ p r o d u c t   h i g h c h a r t s   h i g h m a p s 
                                   * / 
                                 p o s i t i o n :   { 
 
                                         / * * 
                                           *   H o r i z o n t a l   a l i g n m e n t . 
                                           *   @ t y p e   { S t r i n g } 
                                           * / 
                                         a l i g n :   ' r i g h t ' , 
 
                                         / * * 
                                           *   T h e   X   o f f s e t   o f   t h e   b u t t o n . 
                                           *   @ t y p e   { N u m b e r } 
                                           * / 
                                         x :   - 1 0 , 
 
                                         / * * 
                                           *   T h e   Y   o f f s e t   o f   t h e   b u t t o n . 
                                           *   @ t y p e   { N u m b e r } 
                                           * / 
                                         y :   1 0 
 
                                         / * * 
                                           *   V e r t i c a l   a l i g n m e n t   o f   t h e   b u t t o n . 
                                           * 
                                           *   @ t y p e   { S t r i n g } 
                                           *   @ d e f a u l t   t o p 
                                           *   @ v a l i d v a l u e   [ " t o p " ,   " m i d d l e " ,   " b o t t o m " ] 
                                           *   @ p r o d u c t   h i g h c h a r t s   h i g h m a p s 
                                           *   @ a p i o p t i o n   d r i l l d o w n . d r i l l U p B u t t o n . p o s i t i o n . v e r t i c a l A l i g n 
                                           * / 
                                 } 
                                 / * * 
                                   *   W h a t   b o x   t o   a l i g n   t h e   b u t t o n   t o .   C a n   b e   e i t h e r   ` p l o t B o x `   o r 
                                   *   ` s p a c i n g B o x . 
                                   *   
                                   *   @ t y p e   { S t r i n g } 
                                   *   @ d e f a u l t   p l o t B o x 
                                   *   @ v a l i d v a l u e   [ " p l o t B o x " ,   " s p a c i n g B o x " ] 
                                   *   @ s i n c e   3 . 0 . 8 
                                   *   @ p r o d u c t   h i g h c h a r t s   h i g h m a p s 
                                   *   @ a p i o p t i o n   d r i l l d o w n . d r i l l U p B u t t o n . r e l a t i v e T o 
                                   * / 
 
                                 / * * 
                                   *   A   c o l l e c t i o n   o f   a t t r i b u t e s   f o r   t h e   b u t t o n .   T h e   o b j e c t   t a k e s   S V G   a t t r i b u t e s 
                                   *   l i k e   ` f i l l ` ,   ` s t r o k e ` ,   ` s t r o k e - w i d t h `   o r   ` r ` ,   t h e   b o r d e r   r a d i u s . 
                                   *   T h e   t h e m e   a l s o   s u p p o r t s   ` s t y l e ` ,   a   c o l l e c t i o n   o f   C S S   p r o p e r t i e s   f o r 
                                   *   t h e   t e x t .   E q u i v a l e n t   a t t r i b u t e s   f o r   t h e   h o v e r   s t a t e   a r e   g i v e n   i n 
                                   *   ` t h e m e . s t a t e s . h o v e r ` . 
                                   *   
                                   *   @ t y p e   { O b j e c t } 
                                   *   @ s e e   I n   s t y l e d   m o d e ,   d r i l l - u p   b u t t o n   s t y l e s   c a n   b e   a p p l i e d   w i t h   t h e 
                                   *   ` . h i g h c h a r t s - d r i l l u p - b u t t o n `   c l a s s . 
                                   *   @ s a m p l e   { h i g h c h a r t s }   h i g h c h a r t s / d r i l l d o w n / d r i l l u p b u t t o n / 
                                   *                   B u t t o n   t h e m i n g 
                                   *   @ s a m p l e   { h i g h m a p s }   h i g h c h a r t s / d r i l l d o w n / d r i l l u p b u t t o n / 
                                   *                   B u t t o n   t h e m i n g 
                                   *   @ s i n c e   3 . 0 . 8 
                                   *   @ p r o d u c t   h i g h c h a r t s   h i g h m a p s 
                                   *   @ a p i o p t i o n   d r i l l d o w n . d r i l l U p B u t t o n . t h e m e 
                                   * / 
                         } 
 
                         / * * 
                           *   A n   a r r a y   o f   s e r i e s   c o n f i g u r a t i o n s   f o r   t h e   d r i l l   d o w n .   E a c h   s e r i e s 
                           *   c o n f i g u r a t i o n   u s e s   t h e   s a m e   s y n t a x   a s   t h e   [ s e r i e s ] ( # s e r i e s )   o p t i o n 
                           *   s e t .   T h e s e   d r i l l d o w n   s e r i e s   a r e   h i d d e n   b y   d e f a u l t .   T h e   d r i l l d o w n 
                           *   s e r i e s   i s   l i n k e d   t o   t h e   p a r e n t   s e r i e s '   p o i n t   b y   i t s   ` i d ` . 
                           *   
                           *   @ t y p e   { A r r a y < O b j e c t > } 
                           *   @ s i n c e   3 . 0 . 8 
                           *   @ p r o d u c t   h i g h c h a r t s   h i g h m a p s 
                           *   @ a p i o p t i o n   d r i l l d o w n . s e r i e s 
                           * / 
                 } ; 
 
 
 
                 / * * 
                   *   F i r e s   w h e n   a   d r i l l d o w n   p o i n t   i s   c l i c k e d ,   b e f o r e   t h e   n e w   s e r i e s   i s 
                   *   a d d e d .   T h i s   e v e n t   i s   a l s o   u t i l i z e d   f o r   a s y n c   d r i l l d o w n ,   w h e r e   t h e 
                   *   s e r i e s O p t i o n s   a r e   n o t   a d d e d   b y   o p t i o n ,   b u t   r a t h e r   l o a d e d   a s y n c .   N o t e 
                   *   t h a t   w h e n   c l i c k i n g   a   c a t e g o r y   l a b e l   t o   t r i g g e r   m u l t i p l e   s e r i e s   d r i l l d o w n , 
                   *   o n e   ` d r i l l d o w n `   e v e n t   i s   t r i g g e r e d   p e r   p o i n t   i n   t h e   c a t e g o r y . 
                   *   
                   *   E v e n t   a r g u m e n t s : 
                   *   
                   *   < d l > 
                   *   
                   *   < d t > ` c a t e g o r y ` < / d t > 
                   *   
                   *   < d d > I f   a   c a t e g o r y   l a b e l   w a s   c l i c k e d ,   w h i c h   i n d e x . < / d d > 
                   *   
                   *   < d t > ` p o i n t ` < / d t > 
                   *   
                   *   < d d > T h e   o r i g i n a t i n g   p o i n t . < / d d > 
                   *   
                   *   < d t > ` o r i g i n a l E v e n t ` < / d t > 
                   *   
                   *   < d d > T h e   o r i g i n a l   b r o w s e r   e v e n t   ( u s u a l l y   c l i c k )   t h a t   t r i g g e r e d   t h e 
                   *   d r i l l d o w n . < / d d > 
                   *   
                   *   < d t > ` p o i n t s ` < / d t > 
                   *   
                   *   < d d > I f   a   c a t e g o r y   l a b e l   w a s   c l i c k e d ,   t h i s   a r r a y   h o l d s   a l l   p o i n t s 
                   *   c o r r e s p o n i n g   t o   t h e   c a t e g o r y . < / d d > 
                   *   
                   *   < d t > ` s e r i e s O p t i o n s ` < / d t > 
                   *   
                   *   < d d > O p t i o n s   f o r   t h e   n e w   s e r i e s < / d d > 
                   *   
                   *   < / d l > 
                   *   
                   *   @ t y p e   { F u n c t i o n } 
                   *   @ c o n t e x t   C h a r t 
                   *   @ s a m p l e   { h i g h c h a r t s }   h i g h c h a r t s / d r i l l d o w n / a s y n c /   A s y n c   d r i l l d o w n 
                   *   @ s i n c e   3 . 0 . 8 
                   *   @ p r o d u c t   h i g h c h a r t s   h i g h m a p s 
                   *   @ a p i o p t i o n   c h a r t . e v e n t s . d r i l l d o w n 
                   * / 
 
                 / * * 
                   *   F i r e s   w h e n   d r i l l i n g   u p   f r o m   a   d r i l l d o w n   s e r i e s . 
                   *   
                   *   @ t y p e   { F u n c t i o n } 
                   *   @ c o n t e x t   C h a r t 
                   *   @ s i n c e   3 . 0 . 8 
                   *   @ p r o d u c t   h i g h c h a r t s   h i g h m a p s 
                   *   @ a p i o p t i o n   c h a r t . e v e n t s . d r i l l u p 
                   * / 
 
                 / * * 
                   *   I n   a   c h a r t   w i t h   m u l t i p l e   d r i l l d o w n   s e r i e s ,   t h i s   e v e n t   f i r e s   a f t e r 
                   *   a l l   t h e   s e r i e s   h a v e   b e e n   d r i l l e d   u p . 
                   *   
                   *   @ t y p e   { F u n c t i o n } 
                   *   @ c o n t e x t   C h a r t 
                   *   @ s i n c e   4 . 2 . 4 
                   *   @ p r o d u c t   h i g h c h a r t s   h i g h m a p s 
                   *   @ a p i o p t i o n   c h a r t . e v e n t s . d r i l l u p a l l 
                   * / 
 
                 / * * 
                   *   T h e   ` i d `   o f   a   s e r i e s   i n   t h e   [ d r i l l d o w n . s e r i e s ] ( # d r i l l d o w n . s e r i e s ) 
                   *   a r r a y   t o   u s e   f o r   a   d r i l l d o w n   f o r   t h i s   p o i n t . 
                   *   
                   *   @ t y p e   { S t r i n g } 
                   *   @ s a m p l e   { h i g h c h a r t s }   h i g h c h a r t s / d r i l l d o w n / b a s i c /   B a s i c   d r i l l d o w n 
                   *   @ s i n c e   3 . 0 . 8 
                   *   @ p r o d u c t   h i g h c h a r t s 
                   *   @ a p i o p t i o n   s e r i e s . l i n e . d a t a . d r i l l d o w n 
                   * / 
 
                 / * * 
                   *   A   g e n e r a l   f a d e I n   m e t h o d 
                   * / 
                 H . S V G R e n d e r e r . p r o t o t y p e . E l e m e n t . p r o t o t y p e . f a d e I n   =   f u n c t i o n ( a n i m a t i o n )   { 
                         t h i s 
                                 . a t t r ( { 
                                         o p a c i t y :   0 . 1 , 
                                         v i s i b i l i t y :   ' i n h e r i t ' 
                                 } ) 
                                 . a n i m a t e ( { 
                                         o p a c i t y :   p i c k ( t h i s . n e w O p a c i t y ,   1 )   / /   n e w O p a c i t y   u s e d   i n   m a p s 
                                 } ,   a n i m a t i o n   | |   { 
                                         d u r a t i o n :   2 5 0 
                                 } ) ; 
                 } ; 
 
                 / * * 
                   *   A d d   a   s e r i e s   t o   t h e   c h a r t   a s   d r i l l d o w n   f r o m   a   s p e c i f i c   p o i n t   i n   t h e   p a r e n t 
                   *   s e r i e s .   T h i s   m e t h o d   i s   u s e d   f o r   a s y n c   d r i l l d o w n ,   w h e n   c l i c k i n g   a   p o i n t   i n   a 
                   *   s e r i e s   s h o u l d   r e s u l t   i n   l o a d i n g   a n d   d i s p l a y i n g   a   m o r e   h i g h - r e s o l u t i o n   s e r i e s . 
                   *   W h e n   n o t   a s y n c ,   t h e   s e t u p   i s   s i m p l e r   u s i n g   t h e   { @ l i n k   
                   *   h t t p s : / / a p i . h i g h c h a r t s . c o m / h i g h c h a r t s / d r i l l d o w n . s e r i e s | d r i l l d o w n . s e r i e s } 
                   *   o p t i o n s   s t r u c t u r e . 
                   * 
                   *   @ m e m b e r O f   H i g h c h a r t s . C h a r t 
                   *   @ f u n c t i o n   # a d d S e r i e s A s D r i l l d o w n 
                   *   
                   *   @ p a r a m     { H i g h c h a r t s . P o i n t }   p o i n t 
                   *                   T h e   p o i n t   f r o m   w h i c h   t h e   d r i l l d o w n   w i l l   s t a r t . 
                   *   @ p a r a m     { S e r i e s O p t i o n s }   o p t i o n s 
                   *                   T h e   s e r i e s   o p t i o n s   f o r   t h e   n e w ,   d e t a i l e d   s e r i e s . 
                   * 
                   *   @ s a m p l e   h i g h c h a r t s / d r i l l d o w n / a s y n c /   A s y n c   d r i l l d o w n 
                   * / 
                 C h a r t . p r o t o t y p e . a d d S e r i e s A s D r i l l d o w n   =   f u n c t i o n ( p o i n t ,   o p t i o n s )   { 
                         t h i s . a d d S i n g l e S e r i e s A s D r i l l d o w n ( p o i n t ,   o p t i o n s ) ; 
                         t h i s . a p p l y D r i l l d o w n ( ) ; 
                 } ; 
                 C h a r t . p r o t o t y p e . a d d S i n g l e S e r i e s A s D r i l l d o w n   =   f u n c t i o n ( p o i n t ,   d d O p t i o n s )   { 
                         v a r   o l d S e r i e s   =   p o i n t . s e r i e s , 
                                 x A x i s   =   o l d S e r i e s . x A x i s , 
                                 y A x i s   =   o l d S e r i e s . y A x i s , 
                                 n e w S e r i e s , 
                                 p o i n t I n d e x , 
                                 l e v e l S e r i e s   =   [ ] , 
                                 l e v e l S e r i e s O p t i o n s   =   [ ] , 
                                 l e v e l , 
                                 l e v e l N u m b e r , 
                                 l a s t , 
                                 c o l o r P r o p ; 
 
 
 
                         c o l o r P r o p   =   { 
                                 c o l o r I n d e x :   p i c k ( p o i n t . c o l o r I n d e x ,   o l d S e r i e s . c o l o r I n d e x ) 
                         } ; 
 
 
                         i f   ( ! t h i s . d r i l l d o w n L e v e l s )   { 
                                 t h i s . d r i l l d o w n L e v e l s   =   [ ] ; 
                         } 
 
                         l e v e l N u m b e r   =   o l d S e r i e s . o p t i o n s . _ l e v e l N u m b e r   | |   0 ; 
 
                         / /   S e e   i f   w e   c a n   r e u s e   t h e   r e g i s t e r e d   s e r i e s   f r o m   l a s t   r u n 
                         l a s t   =   t h i s . d r i l l d o w n L e v e l s [ t h i s . d r i l l d o w n L e v e l s . l e n g t h   -   1 ] ; 
                         i f   ( l a s t   & &   l a s t . l e v e l N u m b e r   ! = =   l e v e l N u m b e r )   { 
                                 l a s t   =   u n d e f i n e d ; 
                         } 
 
                         d d O p t i o n s   =   e x t e n d ( e x t e n d ( { 
                                 _ d d S e r i e s I d :   d d S e r i e s I d + + 
                         } ,   c o l o r P r o p ) ,   d d O p t i o n s ) ; 
                         p o i n t I n d e x   =   i n A r r a y ( p o i n t ,   o l d S e r i e s . p o i n t s ) ; 
 
                         / /   R e c o r d   o p t i o n s   f o r   a l l   c u r r e n t   s e r i e s 
                         e a c h ( o l d S e r i e s . c h a r t . s e r i e s ,   f u n c t i o n ( s e r i e s )   { 
                                 i f   ( s e r i e s . x A x i s   = = =   x A x i s   & &   ! s e r i e s . i s D r i l l i n g )   { 
                                         s e r i e s . o p t i o n s . _ d d S e r i e s I d   =   s e r i e s . o p t i o n s . _ d d S e r i e s I d   | |   d d S e r i e s I d + + ; 
                                         s e r i e s . o p t i o n s . _ c o l o r I n d e x   =   s e r i e s . u s e r O p t i o n s . _ c o l o r I n d e x ; 
                                         s e r i e s . o p t i o n s . _ l e v e l N u m b e r   =   s e r i e s . o p t i o n s . _ l e v e l N u m b e r   | |   l e v e l N u m b e r ;   / /   # 3 1 8 2 
 
                                         i f   ( l a s t )   { 
                                                 l e v e l S e r i e s   =   l a s t . l e v e l S e r i e s ; 
                                                 l e v e l S e r i e s O p t i o n s   =   l a s t . l e v e l S e r i e s O p t i o n s ; 
                                         }   e l s e   { 
                                                 l e v e l S e r i e s . p u s h ( s e r i e s ) ; 
                                                 l e v e l S e r i e s O p t i o n s . p u s h ( s e r i e s . o p t i o n s ) ; 
                                         } 
                                 } 
                         } ) ; 
 
                         / /   A d d   a   r e c o r d   o f   p r o p e r t i e s   f o r   e a c h   d r i l l d o w n   l e v e l 
                         l e v e l   =   e x t e n d ( { 
                                 l e v e l N u m b e r :   l e v e l N u m b e r , 
                                 s e r i e s O p t i o n s :   o l d S e r i e s . o p t i o n s , 
                                 l e v e l S e r i e s O p t i o n s :   l e v e l S e r i e s O p t i o n s , 
                                 l e v e l S e r i e s :   l e v e l S e r i e s , 
                                 s h a p e A r g s :   p o i n t . s h a p e A r g s , 
                                 b B o x :   p o i n t . g r a p h i c   ?   p o i n t . g r a p h i c . g e t B B o x ( )   :   { } ,   / /   n o   g r a p h i c   i n   l i n e   s e r i e s   w i t h   m a r k e r s   d i s a b l e d 
                                 c o l o r :   p o i n t . i s N u l l   ?   n e w   H . C o l o r ( c o l o r ) . s e t O p a c i t y ( 0 ) . g e t ( )   :   c o l o r , 
                                 l o w e r S e r i e s O p t i o n s :   d d O p t i o n s , 
                                 p o i n t O p t i o n s :   o l d S e r i e s . o p t i o n s . d a t a [ p o i n t I n d e x ] , 
                                 p o i n t I n d e x :   p o i n t I n d e x , 
                                 o l d E x t r e m e s :   { 
                                         x M i n :   x A x i s   & &   x A x i s . u s e r M i n , 
                                         x M a x :   x A x i s   & &   x A x i s . u s e r M a x , 
                                         y M i n :   y A x i s   & &   y A x i s . u s e r M i n , 
                                         y M a x :   y A x i s   & &   y A x i s . u s e r M a x 
                                 } , 
                                 r e s e t Z o o m B u t t o n :   t h i s . r e s e t Z o o m B u t t o n 
                         } ,   c o l o r P r o p ) ; 
 
                         / /   P u s h   i t   t o   t h e   l o o k u p   a r r a y 
                         t h i s . d r i l l d o w n L e v e l s . p u s h ( l e v e l ) ; 
 
                         / /   R e s e t   n a m e s   t o   p r e v e n t   e x t e n d i n g   ( # 6 7 0 4 ) 
                         i f   ( x A x i s   & &   x A x i s . n a m e s )   { 
                                 x A x i s . n a m e s . l e n g t h   =   0 ; 
                         } 
 
                         n e w S e r i e s   =   l e v e l . l o w e r S e r i e s   =   t h i s . a d d S e r i e s ( d d O p t i o n s ,   f a l s e ) ; 
                         n e w S e r i e s . o p t i o n s . _ l e v e l N u m b e r   =   l e v e l N u m b e r   +   1 ; 
                         i f   ( x A x i s )   { 
                                 x A x i s . o l d P o s   =   x A x i s . p o s ; 
                                 x A x i s . u s e r M i n   =   x A x i s . u s e r M a x   =   n u l l ; 
                                 y A x i s . u s e r M i n   =   y A x i s . u s e r M a x   =   n u l l ; 
                         } 
 
                         / /   R u n   f a n c y   c r o s s - a n i m a t i o n   o n   s u p p o r t e d   a n d   e q u a l   t y p e s 
                         i f   ( o l d S e r i e s . t y p e   = = =   n e w S e r i e s . t y p e )   { 
                                 n e w S e r i e s . a n i m a t e   =   n e w S e r i e s . a n i m a t e D r i l l d o w n   | |   n o o p ; 
                                 n e w S e r i e s . o p t i o n s . a n i m a t i o n   =   t r u e ; 
                         } 
                 } ; 
 
                 C h a r t . p r o t o t y p e . a p p l y D r i l l d o w n   =   f u n c t i o n ( )   { 
                         v a r   d r i l l d o w n L e v e l s   =   t h i s . d r i l l d o w n L e v e l s , 
                                 l e v e l T o R e m o v e ; 
 
                         i f   ( d r i l l d o w n L e v e l s   & &   d r i l l d o w n L e v e l s . l e n g t h   >   0 )   {   / /   # 3 3 5 2 ,   a s y n c   l o a d i n g 
                                 l e v e l T o R e m o v e   =   d r i l l d o w n L e v e l s [ d r i l l d o w n L e v e l s . l e n g t h   -   1 ] . l e v e l N u m b e r ; 
                                 e a c h ( t h i s . d r i l l d o w n L e v e l s ,   f u n c t i o n ( l e v e l )   { 
                                         i f   ( l e v e l . l e v e l N u m b e r   = = =   l e v e l T o R e m o v e )   { 
                                                 e a c h ( l e v e l . l e v e l S e r i e s ,   f u n c t i o n ( s e r i e s )   { 
                                                         i f   ( s e r i e s . o p t i o n s   & &   s e r i e s . o p t i o n s . _ l e v e l N u m b e r   = = =   l e v e l T o R e m o v e )   {   / /   N o t   r e m o v e d ,   n o t   a d d e d   a s   p a r t   o f   a   m u l t i - s e r i e s   d r i l l d o w n 
                                                                 s e r i e s . r e m o v e ( f a l s e ) ; 
                                                         } 
                                                 } ) ; 
                                         } 
                                 } ) ; 
                         } 
 
                         / /   W e   h a v e   a   r e s e t   z o o m   b u t t o n .   H i d e   i t   a n d   d e t a t c h   i t   f r o m   t h e   c h a r t .   I t 
                         / /   i s   p r e s e r v e d   t o   t h e   l a y e r   c o n f i g   a b o v e . 
                         i f   ( t h i s . r e s e t Z o o m B u t t o n )   { 
                                 t h i s . r e s e t Z o o m B u t t o n . h i d e ( ) ; 
                                 d e l e t e   t h i s . r e s e t Z o o m B u t t o n ; 
                         } 
 
                         t h i s . p o i n t e r . r e s e t ( ) ; 
                         t h i s . r e d r a w ( ) ; 
                         t h i s . s h o w D r i l l U p B u t t o n ( ) ; 
                 } ; 
 
                 C h a r t . p r o t o t y p e . g e t D r i l l d o w n B a c k T e x t   =   f u n c t i o n ( )   { 
                         v a r   d r i l l d o w n L e v e l s   =   t h i s . d r i l l d o w n L e v e l s , 
                                 l a s t L e v e l ; 
                         i f   ( d r i l l d o w n L e v e l s   & &   d r i l l d o w n L e v e l s . l e n g t h   >   0 )   {   / /   # 3 3 5 2 ,   a s y n c   l o a d i n g 
                                 l a s t L e v e l   =   d r i l l d o w n L e v e l s [ d r i l l d o w n L e v e l s . l e n g t h   -   1 ] ; 
                                 l a s t L e v e l . s e r i e s   =   l a s t L e v e l . s e r i e s O p t i o n s ; 
                                 r e t u r n   f o r m a t ( t h i s . o p t i o n s . l a n g . d r i l l U p T e x t ,   l a s t L e v e l ) ; 
                         } 
 
                 } ; 
 
                 C h a r t . p r o t o t y p e . s h o w D r i l l U p B u t t o n   =   f u n c t i o n ( )   { 
                         v a r   c h a r t   =   t h i s , 
                                 b a c k T e x t   =   t h i s . g e t D r i l l d o w n B a c k T e x t ( ) , 
                                 b u t t o n O p t i o n s   =   c h a r t . o p t i o n s . d r i l l d o w n . d r i l l U p B u t t o n , 
                                 a t t r , 
                                 s t a t e s ; 
 
 
                         i f   ( ! t h i s . d r i l l U p B u t t o n )   { 
                                 a t t r   =   b u t t o n O p t i o n s . t h e m e ; 
                                 s t a t e s   =   a t t r   & &   a t t r . s t a t e s ; 
 
                                 t h i s . d r i l l U p B u t t o n   =   t h i s . r e n d e r e r . b u t t o n ( 
                                                 b a c k T e x t , 
                                                 n u l l , 
                                                 n u l l , 
                                                 f u n c t i o n ( )   { 
                                                         c h a r t . d r i l l U p ( ) ; 
                                                 } , 
                                                 a t t r , 
                                                 s t a t e s   & &   s t a t e s . h o v e r , 
                                                 s t a t e s   & &   s t a t e s . s e l e c t 
                                         ) 
                                         . a d d C l a s s ( ' h i g h c h a r t s - d r i l l u p - b u t t o n ' ) 
                                         . a t t r ( { 
                                                 a l i g n :   b u t t o n O p t i o n s . p o s i t i o n . a l i g n , 
                                                 z I n d e x :   7 
                                         } ) 
                                         . a d d ( ) 
                                         . a l i g n ( b u t t o n O p t i o n s . p o s i t i o n ,   f a l s e ,   b u t t o n O p t i o n s . r e l a t i v e T o   | |   ' p l o t B o x ' ) ; 
                         }   e l s e   { 
                                 t h i s . d r i l l U p B u t t o n . a t t r ( { 
                                                 t e x t :   b a c k T e x t 
                                         } ) 
                                         . a l i g n ( ) ; 
                         } 
                 } ; 
 
                 / * * 
                   *   W h e n   t h e   c h a r t   i s   d r i l l e d   d o w n   t o   a   c h i l d   s e r i e s ,   c a l l i n g   ` c h a r t . d r i l l U p ( ) ` 
                   *   w i l l   d r i l l   u p   t o   t h e   p a r e n t   s e r i e s .   R e q u i r e s   t h e   d r i l l d o w n   m o d u l e . 
                   * 
                   *   @ f u n c t i o n   d r i l l U p 
                   *   @ m e m b e r O f   H i g h c h a r t s . C h a r t 
                   * / 
                 C h a r t . p r o t o t y p e . d r i l l U p   =   f u n c t i o n ( )   { 
                         v a r   c h a r t   =   t h i s , 
                                 d r i l l d o w n L e v e l s   =   c h a r t . d r i l l d o w n L e v e l s , 
                                 l e v e l N u m b e r   =   d r i l l d o w n L e v e l s [ d r i l l d o w n L e v e l s . l e n g t h   -   1 ] . l e v e l N u m b e r , 
                                 i   =   d r i l l d o w n L e v e l s . l e n g t h , 
                                 c h a r t S e r i e s   =   c h a r t . s e r i e s , 
                                 s e r i e s I , 
                                 l e v e l , 
                                 o l d S e r i e s , 
                                 n e w S e r i e s , 
                                 o l d E x t r e m e s , 
                                 a d d S e r i e s   =   f u n c t i o n ( s e r i e s O p t i o n s )   { 
                                         v a r   a d d e d S e r i e s ; 
                                         e a c h ( c h a r t S e r i e s ,   f u n c t i o n ( s e r i e s )   { 
                                                 i f   ( s e r i e s . o p t i o n s . _ d d S e r i e s I d   = = =   s e r i e s O p t i o n s . _ d d S e r i e s I d )   { 
                                                         a d d e d S e r i e s   =   s e r i e s ; 
                                                 } 
                                         } ) ; 
 
                                         a d d e d S e r i e s   =   a d d e d S e r i e s   | |   c h a r t . a d d S e r i e s ( s e r i e s O p t i o n s ,   f a l s e ) ; 
                                         i f   ( a d d e d S e r i e s . t y p e   = = =   o l d S e r i e s . t y p e   & &   a d d e d S e r i e s . a n i m a t e D r i l l u p T o )   { 
                                                 a d d e d S e r i e s . a n i m a t e   =   a d d e d S e r i e s . a n i m a t e D r i l l u p T o ; 
                                         } 
                                         i f   ( s e r i e s O p t i o n s   = = =   l e v e l . s e r i e s O p t i o n s )   { 
                                                 n e w S e r i e s   =   a d d e d S e r i e s ; 
                                         } 
                                 } ; 
 
                         w h i l e   ( i - - )   { 
 
                                 l e v e l   =   d r i l l d o w n L e v e l s [ i ] ; 
                                 i f   ( l e v e l . l e v e l N u m b e r   = = =   l e v e l N u m b e r )   { 
                                         d r i l l d o w n L e v e l s . p o p ( ) ; 
 
                                         / /   G e t   t h e   l o w e r   s e r i e s   b y   r e f e r e n c e   o r   i d 
                                         o l d S e r i e s   =   l e v e l . l o w e r S e r i e s ; 
                                         i f   ( ! o l d S e r i e s . c h a r t )   {   / /   # 2 7 8 6 
                                                 s e r i e s I   =   c h a r t S e r i e s . l e n g t h ;   / /   # 2 9 1 9 
                                                 w h i l e   ( s e r i e s I - - )   { 
                                                         i f   ( c h a r t S e r i e s [ s e r i e s I ] . o p t i o n s . i d   = = =   l e v e l . l o w e r S e r i e s O p t i o n s . i d   & & 
                                                                 c h a r t S e r i e s [ s e r i e s I ] . o p t i o n s . _ l e v e l N u m b e r   = = =   l e v e l N u m b e r   +   1 )   {   / /   # 3 8 6 7 
                                                                 o l d S e r i e s   =   c h a r t S e r i e s [ s e r i e s I ] ; 
                                                                 b r e a k ; 
                                                         } 
                                                 } 
                                         } 
                                         o l d S e r i e s . x D a t a   =   [ ] ;   / /   O v e r c o m e   p r o b l e m s   w i t h   m i n R a n g e   ( # 2 8 9 8 ) 
 
                                         e a c h ( l e v e l . l e v e l S e r i e s O p t i o n s ,   a d d S e r i e s ) ; 
 
                                         f i r e E v e n t ( c h a r t ,   ' d r i l l u p ' ,   { 
                                                 s e r i e s O p t i o n s :   l e v e l . s e r i e s O p t i o n s 
                                         } ) ; 
 
                                         i f   ( n e w S e r i e s . t y p e   = = =   o l d S e r i e s . t y p e )   { 
                                                 n e w S e r i e s . d r i l l d o w n L e v e l   =   l e v e l ; 
                                                 n e w S e r i e s . o p t i o n s . a n i m a t i o n   =   c h a r t . o p t i o n s . d r i l l d o w n . a n i m a t i o n ; 
 
                                                 i f   ( o l d S e r i e s . a n i m a t e D r i l l u p F r o m   & &   o l d S e r i e s . c h a r t )   {   / /   # 2 9 1 9 
                                                         o l d S e r i e s . a n i m a t e D r i l l u p F r o m ( l e v e l ) ; 
                                                 } 
                                         } 
                                         n e w S e r i e s . o p t i o n s . _ l e v e l N u m b e r   =   l e v e l N u m b e r ; 
 
                                         o l d S e r i e s . r e m o v e ( f a l s e ) ; 
 
                                         / /   R e s e t   t h e   z o o m   l e v e l   o f   t h e   u p p e r   s e r i e s 
                                         i f   ( n e w S e r i e s . x A x i s )   { 
                                                 o l d E x t r e m e s   =   l e v e l . o l d E x t r e m e s ; 
                                                 n e w S e r i e s . x A x i s . s e t E x t r e m e s ( o l d E x t r e m e s . x M i n ,   o l d E x t r e m e s . x M a x ,   f a l s e ) ; 
                                                 n e w S e r i e s . y A x i s . s e t E x t r e m e s ( o l d E x t r e m e s . y M i n ,   o l d E x t r e m e s . y M a x ,   f a l s e ) ; 
                                         } 
 
                                         / /   W e   h a v e   a   r e s e t Z o o m B u t t o n   t u c k e d   a w a y   f o r   t h i s   l e v e l .   A t t a t c h 
                                         / /   i t   t o   t h e   c h a r t   a n d   s h o w   i t . 
                                         i f   ( l e v e l . r e s e t Z o o m B u t t o n )   { 
                                                 c h a r t . r e s e t Z o o m B u t t o n   =   l e v e l . r e s e t Z o o m B u t t o n ; 
                                                 c h a r t . r e s e t Z o o m B u t t o n . s h o w ( ) ; 
                                         } 
                                 } 
                         } 
 
                         / /   F i r e   a   o n c e - o f f   e v e n t   a f t e r   a l l   s e r i e s   h a v e   b e e n   d r i l l e d   u p   ( # 5 1 5 8 ) 
                         f i r e E v e n t ( c h a r t ,   ' d r i l l u p a l l ' ) ; 
 
                         t h i s . r e d r a w ( ) ; 
 
                         i f   ( t h i s . d r i l l d o w n L e v e l s . l e n g t h   = = =   0 )   { 
                                 t h i s . d r i l l U p B u t t o n   =   t h i s . d r i l l U p B u t t o n . d e s t r o y ( ) ; 
                         }   e l s e   { 
                                 t h i s . d r i l l U p B u t t o n . a t t r ( { 
                                                 t e x t :   t h i s . g e t D r i l l d o w n B a c k T e x t ( ) 
                                         } ) 
                                         . a l i g n ( ) ; 
                         } 
 
                         t h i s . d d D u p e s . l e n g t h   =   [ ] ;   / /   # 3 3 1 5 
                 } ; 
 
                 / /   D o n ' t   s h o w   t h e   r e s e t   b u t t o n   i f   w e   a l r e a d y   a r e   d i s p l a y i n g   t h e   d r i l l U p   b u t t o n . 
                 w r a p ( C h a r t . p r o t o t y p e ,   ' s h o w R e s e t Z o o m ' ,   f u n c t i o n ( p r o c e e d )   { 
                         i f   ( ! t h i s . d r i l l U p B u t t o n )   { 
                                 p r o c e e d . a p p l y ( t h i s ,   A r r a y . p r o t o t y p e . s l i c e . c a l l ( a r g u m e n t s ,   1 ) ) ; 
                         } 
                 } ) ; 
 
 
                 / * * 
                   *   W h e n   d r i l l i n g   u p ,   k e e p   t h e   u p p e r   s e r i e s   i n v i s i b l e   u n t i l   t h e   l o w e r   s e r i e s   h a s 
                   *   m o v e d   i n t o   p l a c e 
                   * / 
                 C o l u m n S e r i e s . p r o t o t y p e . a n i m a t e D r i l l u p T o   =   f u n c t i o n ( i n i t )   { 
                         i f   ( ! i n i t )   { 
                                 v a r   n e w S e r i e s   =   t h i s , 
                                         l e v e l   =   n e w S e r i e s . d r i l l d o w n L e v e l ; 
 
                                 / /   F i r s t   h i d e   a l l   i t e m s   b e f o r e   a n i m a t i n g   i n   a g a i n 
                                 e a c h ( t h i s . p o i n t s ,   f u n c t i o n ( p o i n t )   { 
                                         v a r   d a t a L a b e l   =   p o i n t . d a t a L a b e l ; 
 
                                         i f   ( p o i n t . g r a p h i c )   {   / /   # 3 4 0 7 
                                                 p o i n t . g r a p h i c . h i d e ( ) ; 
                                         } 
 
                                         i f   ( d a t a L a b e l )   { 
                                                 / /   T h e   d a t a   l a b e l   i s   i n i t i a l l y   h i d d e n ,   m a k e   s u r e   i t   i s   n o t   f a d e d 
                                                 / /   i n   ( # 6 1 2 7 ) 
                                                 d a t a L a b e l . h i d d e n   =   d a t a L a b e l . a t t r ( ' v i s i b i l i t y ' )   = = =   ' h i d d e n ' ; 
 
                                                 i f   ( ! d a t a L a b e l . h i d d e n )   { 
                                                         d a t a L a b e l . h i d e ( ) ; 
                                                         i f   ( p o i n t . c o n n e c t o r )   { 
                                                                 p o i n t . c o n n e c t o r . h i d e ( ) ; 
                                                         } 
                                                 } 
                                         } 
                                 } ) ; 
 
 
                                 / /   D o   d u m m y   a n i m a t i o n   o n   f i r s t   p o i n t   t o   g e t   t o   c o m p l e t e 
                                 s e t T i m e o u t ( f u n c t i o n ( )   { 
                                         i f   ( n e w S e r i e s . p o i n t s )   {   / /   M a y   b e   d e s t r o y e d   i n   t h e   m e a n t i m e ,   # 3 3 8 9 
                                                 e a c h ( n e w S e r i e s . p o i n t s ,   f u n c t i o n ( p o i n t ,   i )   { 
                                                         / /   F a d e   i n   o t h e r   p o i n t s 	 	 	     
                                                         v a r   v e r b   = 
                                                                 i   = = =   ( l e v e l   & &   l e v e l . p o i n t I n d e x )   ?   ' s h o w '   :   ' f a d e I n ' , 
                                                                 i n h e r i t   =   v e r b   = = =   ' s h o w '   ?   t r u e   :   u n d e f i n e d , 
                                                                 d a t a L a b e l   =   p o i n t . d a t a L a b e l ; 
 
 
                                                         i f   ( p o i n t . g r a p h i c )   {   / /   # 3 4 0 7 
                                                                 p o i n t . g r a p h i c [ v e r b ] ( i n h e r i t ) ; 
                                                         } 
 
                                                         i f   ( d a t a L a b e l   & &   ! d a t a L a b e l . h i d d e n )   {   / /   # 6 1 2 7 
                                                                 d a t a L a b e l [ v e r b ] ( i n h e r i t ) ; 
                                                                 i f   ( p o i n t . c o n n e c t o r )   { 
                                                                         p o i n t . c o n n e c t o r [ v e r b ] ( i n h e r i t ) ; 
                                                                 } 
                                                         } 
                                                 } ) ; 
                                         } 
                                 } ,   M a t h . m a x ( t h i s . c h a r t . o p t i o n s . d r i l l d o w n . a n i m a t i o n . d u r a t i o n   -   5 0 ,   0 ) ) ; 
 
                                 / /   R e s e t 
                                 t h i s . a n i m a t e   =   n o o p ; 
                         } 
 
                 } ; 
 
                 C o l u m n S e r i e s . p r o t o t y p e . a n i m a t e D r i l l d o w n   =   f u n c t i o n ( i n i t )   { 
                         v a r   s e r i e s   =   t h i s , 
                                 d r i l l d o w n L e v e l s   =   t h i s . c h a r t . d r i l l d o w n L e v e l s , 
                                 a n i m a t e F r o m , 
                                 a n i m a t i o n O p t i o n s   =   t h i s . c h a r t . o p t i o n s . d r i l l d o w n . a n i m a t i o n , 
                                 x A x i s   =   t h i s . x A x i s ; 
 
                         i f   ( ! i n i t )   { 
                                 e a c h ( d r i l l d o w n L e v e l s ,   f u n c t i o n ( l e v e l )   { 
                                         i f   ( s e r i e s . o p t i o n s . _ d d S e r i e s I d   = = =   l e v e l . l o w e r S e r i e s O p t i o n s . _ d d S e r i e s I d )   { 
                                                 a n i m a t e F r o m   =   l e v e l . s h a p e A r g s ; 
 
                                         } 
                                 } ) ; 
 
                                 a n i m a t e F r o m . x   + =   ( p i c k ( x A x i s . o l d P o s ,   x A x i s . p o s )   -   x A x i s . p o s ) ; 
 
                                 e a c h ( t h i s . p o i n t s ,   f u n c t i o n ( p o i n t )   { 
                                         v a r   a n i m a t e T o   =   p o i n t . s h a p e A r g s ; 
 
 
 
                                         i f   ( p o i n t . g r a p h i c )   { 
                                                 p o i n t . g r a p h i c 
                                                         . a t t r ( a n i m a t e F r o m ) 
                                                         . a n i m a t e ( 
                                                                 e x t e n d ( p o i n t . s h a p e A r g s ,   { 
                                                                         f i l l :   p o i n t . c o l o r   | |   s e r i e s . c o l o r 
                                                                 } ) , 
                                                                 a n i m a t i o n O p t i o n s 
                                                         ) ; 
                                         } 
                                         i f   ( p o i n t . d a t a L a b e l )   { 
                                                 p o i n t . d a t a L a b e l . f a d e I n ( a n i m a t i o n O p t i o n s ) ; 
                                         } 
                                 } ) ; 
                                 t h i s . a n i m a t e   =   n u l l ; 
                         } 
 
                 } ; 
 
                 / * * 
                   *   W h e n   d r i l l i n g   u p ,   p u l l   o u t   t h e   i n d i v i d u a l   p o i n t   g r a p h i c s   f r o m   t h e   l o w e r   s e r i e s 
                   *   a n d   a n i m a t e   t h e m   i n t o   t h e   o r i g i n   p o i n t   i n   t h e   u p p e r   s e r i e s . 
                   * / 
                 C o l u m n S e r i e s . p r o t o t y p e . a n i m a t e D r i l l u p F r o m   =   f u n c t i o n ( l e v e l )   { 
                         v a r   a n i m a t i o n O p t i o n s   =   t h i s . c h a r t . o p t i o n s . d r i l l d o w n . a n i m a t i o n , 
                                 g r o u p   =   t h i s . g r o u p , 
                                 / /   F o r   3 d   c o l u m n   s e r i e s   a l l   c o l u m n s   a r e   a d d e d   t o   o n e   g r o u p   
                                 / /   s o   w e   s h o u l d   n o t   d e l e t e   t h e   w h o l e   g r o u p .   # 5 2 9 7 
                                 r e m o v e G r o u p   =   g r o u p   ! = =   t h i s . c h a r t . c o l u m n G r o u p , 
                                 s e r i e s   =   t h i s ; 
 
                         / /   C a n c e l   m o u s e   e v e n t s   o n   t h e   s e r i e s   g r o u p   ( # 2 7 8 7 ) 
                         e a c h ( s e r i e s . t r a c k e r G r o u p s ,   f u n c t i o n ( k e y )   { 
                                 i f   ( s e r i e s [ k e y ] )   {   / /   w e   d o n ' t   a l w a y s   h a v e   d a t a L a b e l s G r o u p 
                                         s e r i e s [ k e y ] . o n ( ' m o u s e o v e r ' ) ; 
                                 } 
                         } ) ; 
 
                         i f   ( r e m o v e G r o u p )   { 
                                 d e l e t e   t h i s . g r o u p ; 
                         } 
 
                         e a c h ( t h i s . p o i n t s ,   f u n c t i o n ( p o i n t )   { 
                                 v a r   g r a p h i c   =   p o i n t . g r a p h i c , 
                                         a n i m a t e T o   =   l e v e l . s h a p e A r g s , 
                                         c o m p l e t e   =   f u n c t i o n ( )   { 
                                                 g r a p h i c . d e s t r o y ( ) ; 
                                                 i f   ( g r o u p   & &   r e m o v e G r o u p )   { 
                                                         g r o u p   =   g r o u p . d e s t r o y ( ) ; 
                                                 } 
                                         } ; 
 
                                 i f   ( g r a p h i c )   { 
 
                                         d e l e t e   p o i n t . g r a p h i c ; 
 
 
 
                                         i f   ( a n i m a t i o n O p t i o n s )   { 
                                                 g r a p h i c . a n i m a t e ( 
                                                         a n i m a t e T o , 
                                                         H . m e r g e ( a n i m a t i o n O p t i o n s ,   { 
                                                                 c o m p l e t e :   c o m p l e t e 
                                                         } ) 
                                                 ) ; 
                                         }   e l s e   { 
                                                 g r a p h i c . a t t r ( a n i m a t e T o ) ; 
                                                 c o m p l e t e ( ) ; 
                                         } 
                                 } 
                         } ) ; 
                 } ; 
 
                 i f   ( P i e S e r i e s )   { 
                         e x t e n d ( P i e S e r i e s . p r o t o t y p e ,   { 
                                 a n i m a t e D r i l l u p T o :   C o l u m n S e r i e s . p r o t o t y p e . a n i m a t e D r i l l u p T o , 
                                 a n i m a t e D r i l l u p F r o m :   C o l u m n S e r i e s . p r o t o t y p e . a n i m a t e D r i l l u p F r o m , 
 
                                 a n i m a t e D r i l l d o w n :   f u n c t i o n ( i n i t )   { 
                                         v a r   l e v e l   =   t h i s . c h a r t . d r i l l d o w n L e v e l s [ t h i s . c h a r t . d r i l l d o w n L e v e l s . l e n g t h   -   1 ] , 
                                                 a n i m a t i o n O p t i o n s   =   t h i s . c h a r t . o p t i o n s . d r i l l d o w n . a n i m a t i o n , 
                                                 a n i m a t e F r o m   =   l e v e l . s h a p e A r g s , 
                                                 s t a r t   =   a n i m a t e F r o m . s t a r t , 
                                                 a n g l e   =   a n i m a t e F r o m . e n d   -   s t a r t , 
                                                 s t a r t A n g l e   =   a n g l e   /   t h i s . p o i n t s . l e n g t h ; 
 
                                         i f   ( ! i n i t )   { 
                                                 e a c h ( t h i s . p o i n t s ,   f u n c t i o n ( p o i n t ,   i )   { 
                                                         v a r   a n i m a t e T o   =   p o i n t . s h a p e A r g s ; 
 
 
 
                                                         i f   ( p o i n t . g r a p h i c )   { 
                                                                 p o i n t . g r a p h i c 
                                                                         . a t t r ( H . m e r g e ( a n i m a t e F r o m ,   { 
                                                                                 s t a r t :   s t a r t   +   i   *   s t a r t A n g l e , 
                                                                                 e n d :   s t a r t   +   ( i   +   1 )   *   s t a r t A n g l e 
                                                                         } ) ) [ a n i m a t i o n O p t i o n s   ?   ' a n i m a t e '   :   ' a t t r ' ] ( 
                                                                                 a n i m a t e T o , 
                                                                                 a n i m a t i o n O p t i o n s 
                                                                         ) ; 
                                                         } 
                                                 } ) ; 
                                                 t h i s . a n i m a t e   =   n u l l ; 
                                         } 
                                 } 
                         } ) ; 
                 } 
 
                 H . P o i n t . p r o t o t y p e . d o D r i l l d o w n   =   f u n c t i o n ( _ h o l d R e d r a w ,   c a t e g o r y ,   o r i g i n a l E v e n t )   { 
                         v a r   s e r i e s   =   t h i s . s e r i e s , 
                                 c h a r t   =   s e r i e s . c h a r t , 
                                 d r i l l d o w n   =   c h a r t . o p t i o n s . d r i l l d o w n , 
                                 i   =   ( d r i l l d o w n . s e r i e s   | |   [ ] ) . l e n g t h , 
                                 s e r i e s O p t i o n s ; 
 
                         i f   ( ! c h a r t . d d D u p e s )   { 
                                 c h a r t . d d D u p e s   =   [ ] ; 
                         } 
 
                         w h i l e   ( i - -   & &   ! s e r i e s O p t i o n s )   { 
                                 i f   ( d r i l l d o w n . s e r i e s [ i ] . i d   = = =   t h i s . d r i l l d o w n   & &   i n A r r a y ( t h i s . d r i l l d o w n ,   c h a r t . d d D u p e s )   = = =   - 1 )   { 
                                         s e r i e s O p t i o n s   =   d r i l l d o w n . s e r i e s [ i ] ; 
                                         c h a r t . d d D u p e s . p u s h ( t h i s . d r i l l d o w n ) ; 
                                 } 
                         } 
 
                         / /   F i r e   t h e   e v e n t .   I f   s e r i e s O p t i o n s   i s   u n d e f i n e d ,   t h e   i m p l e m e n t e r   c a n   c h e c k   f o r   
                         / /   s e r i e s O p t i o n s ,   a n d   c a l l   a d d S e r i e s A s D r i l l d o w n   a s y n c   i f   n e c e s s a r y . 
                         f i r e E v e n t ( c h a r t ,   ' d r i l l d o w n ' ,   { 
                                 p o i n t :   t h i s , 
                                 s e r i e s O p t i o n s :   s e r i e s O p t i o n s , 
                                 c a t e g o r y :   c a t e g o r y , 
                                 o r i g i n a l E v e n t :   o r i g i n a l E v e n t , 
                                 p o i n t s :   c a t e g o r y   ! = =   u n d e f i n e d   & &   t h i s . s e r i e s . x A x i s . g e t D D P o i n t s ( c a t e g o r y ) . s l i c e ( 0 ) 
                         } ,   f u n c t i o n ( e )   { 
                                 v a r   c h a r t   =   e . p o i n t . s e r i e s   & &   e . p o i n t . s e r i e s . c h a r t , 
                                         s e r i e s O p t i o n s   =   e . s e r i e s O p t i o n s ; 
                                 i f   ( c h a r t   & &   s e r i e s O p t i o n s )   { 
                                         i f   ( _ h o l d R e d r a w )   { 
                                                 c h a r t . a d d S i n g l e S e r i e s A s D r i l l d o w n ( e . p o i n t ,   s e r i e s O p t i o n s ) ; 
                                         }   e l s e   { 
                                                 c h a r t . a d d S e r i e s A s D r i l l d o w n ( e . p o i n t ,   s e r i e s O p t i o n s ) ; 
                                         } 
                                 } 
                         } ) ; 
 
 
                 } ; 
 
                 / * * 
                   *   D r i l l   d o w n   t o   a   g i v e n   c a t e g o r y .   T h i s   i s   t h e   s a m e   a s   c l i c k i n g   o n   a n   a x i s   l a b e l . 
                   * / 
                 H . A x i s . p r o t o t y p e . d r i l l d o w n C a t e g o r y   =   f u n c t i o n ( x ,   e )   { 
                         o b j e c t E a c h ( t h i s . g e t D D P o i n t s ( x ) ,   f u n c t i o n ( p o i n t )   { 
                                 i f   ( p o i n t   & &   p o i n t . s e r i e s   & &   p o i n t . s e r i e s . v i s i b l e   & &   p o i n t . d o D r i l l d o w n )   {   / /   # 3 1 9 7 
                                         p o i n t . d o D r i l l d o w n ( t r u e ,   x ,   e ) ; 
                                 } 
                         } ) ; 
                         t h i s . c h a r t . a p p l y D r i l l d o w n ( ) ; 
                 } ; 
 
                 / * * 
                   *   R e t u r n   d r i l l a b l e   p o i n t s   f o r   t h i s   s p e c i f i c   X   v a l u e 
                   * / 
                 H . A x i s . p r o t o t y p e . g e t D D P o i n t s   =   f u n c t i o n ( x )   { 
                         v a r   r e t   =   [ ] ; 
                         e a c h ( t h i s . s e r i e s ,   f u n c t i o n ( s e r i e s )   { 
                                 v a r   i , 
                                         x D a t a   =   s e r i e s . x D a t a , 
                                         p o i n t s   =   s e r i e s . p o i n t s ; 
 
                                 f o r   ( i   =   0 ;   i   <   x D a t a . l e n g t h ;   i + + )   { 
                                         i f   ( x D a t a [ i ]   = = =   x   & &   s e r i e s . o p t i o n s . d a t a [ i ]   & &   s e r i e s . o p t i o n s . d a t a [ i ] . d r i l l d o w n )   { 
                                                 r e t . p u s h ( p o i n t s   ?   p o i n t s [ i ]   :   t r u e ) ; 
                                                 b r e a k ; 
                                         } 
                                 } 
                         } ) ; 
                         r e t u r n   r e t ; 
                 } ; 
 
 
                 / * * 
                   *   M a k e   a   t i c k   l a b e l   d r i l l a b l e ,   o r   r e m o v e   d r i l l i n g   o n   u p d a t e 
                   * / 
                 T i c k . p r o t o t y p e . d r i l l a b l e   =   f u n c t i o n ( )   { 
                         v a r   p o s   =   t h i s . p o s , 
                                 l a b e l   =   t h i s . l a b e l , 
                                 a x i s   =   t h i s . a x i s , 
                                 i s D r i l l a b l e   =   a x i s . c o l l   = = =   ' x A x i s '   & &   a x i s . g e t D D P o i n t s , 
                                 d d P o i n t s X   =   i s D r i l l a b l e   & &   a x i s . g e t D D P o i n t s ( p o s ) ; 
 
                         i f   ( i s D r i l l a b l e )   { 
                                 i f   ( l a b e l   & &   d d P o i n t s X . l e n g t h )   { 
                                         l a b e l . d r i l l a b l e   =   t r u e ; 
 
 
 
                                         l a b e l 
                                                 . a d d C l a s s ( ' h i g h c h a r t s - d r i l l d o w n - a x i s - l a b e l ' ) 
 
                                                 . o n ( ' c l i c k ' ,   f u n c t i o n ( e )   { 
                                                         a x i s . d r i l l d o w n C a t e g o r y ( p o s ,   e ) ; 
                                                 } ) ; 
 
                                 }   e l s e   i f   ( l a b e l   & &   l a b e l . d r i l l a b l e )   { 
 
 
 
                                         l a b e l . o n ( ' c l i c k ' ,   n u l l ) ;   / /   # 3 8 0 6 	 	 	 
                                         l a b e l . r e m o v e C l a s s ( ' h i g h c h a r t s - d r i l l d o w n - a x i s - l a b e l ' ) ; 
                                 } 
                         } 
                 } ; 
 
                 / * * 
                   *   A l w a y s   k e e p   t h e   d r i l l a b i l i t y   u p d a t e d   ( # 3 9 5 1 ) 
                   * / 
                 w r a p ( T i c k . p r o t o t y p e ,   ' a d d L a b e l ' ,   f u n c t i o n ( p r o c e e d )   { 
                         p r o c e e d . c a l l ( t h i s ) ; 
                         t h i s . d r i l l a b l e ( ) ; 
                 } ) ; 
 
 
                 / * * 
                   *   O n   i n i t i a l i z a t i o n   o f   e a c h   p o i n t ,   i d e n t i f y   i t s   l a b e l   a n d   m a k e   i t   c l i c k a b l e .   A l s o ,   p r o v i d e   a 
                   *   l i s t   o f   p o i n t s   a s s o c i a t e d   t o   t h a t   l a b e l . 
                   * / 
                 w r a p ( H . P o i n t . p r o t o t y p e ,   ' i n i t ' ,   f u n c t i o n ( p r o c e e d ,   s e r i e s ,   o p t i o n s ,   x )   { 
                         v a r   p o i n t   =   p r o c e e d . c a l l ( t h i s ,   s e r i e s ,   o p t i o n s ,   x ) , 
                                 x A x i s   =   s e r i e s . x A x i s , 
                                 t i c k   =   x A x i s   & &   x A x i s . t i c k s [ x ] ; 
 
                         i f   ( p o i n t . d r i l l d o w n )   { 
 
                                 / /   A d d   t h e   c l i c k   e v e n t   t o   t h e   p o i n t   
                                 H . a d d E v e n t ( p o i n t ,   ' c l i c k ' ,   f u n c t i o n ( e )   { 
                                         i f   ( s e r i e s . x A x i s   & &   s e r i e s . c h a r t . o p t i o n s . d r i l l d o w n . a l l o w P o i n t D r i l l d o w n   = = =   f a l s e )   { 
                                                 s e r i e s . x A x i s . d r i l l d o w n C a t e g o r y ( p o i n t . x ,   e ) ;   / /   # 5 8 2 2 ,   x   c h a n g e d 
                                         }   e l s e   { 
                                                 p o i n t . d o D r i l l d o w n ( u n d e f i n e d ,   u n d e f i n e d ,   e ) ; 
                                         } 
                                 } ) ; 
                                 / * 
                                 w r a p ( p o i n t ,   ' i m p o r t E v e n t s ' ,   f u n c t i o n   ( p r o c e e d )   {   / /   w r a p p i n g   i m p o r t E v e n t s   m a k e s   p o i n t . c l i c k   e v e n t   w o r k 
                                 	 i f   ( ! t h i s . h a s I m p o r t e d E v e n t s )   { 
                                 	 	 p r o c e e d . c a l l ( t h i s ) ; 
                                 	 	 H . a d d E v e n t ( t h i s ,   ' c l i c k ' ,   f u n c t i o n   ( )   { 
                                 	 	 	 t h i s . d o D r i l l d o w n ( ) ; 
                                 	 	 } ) ; 
                                 	 } 
                                 } ) ; 
                                 * / 
 
                         } 
 
                         / /   A d d   o r   r e m o v e   c l i c k   h a n d l e r   a n d   s t y l e   o n   t h e   t i c k   l a b e l 
                         i f   ( t i c k )   { 
                                 t i c k . d r i l l a b l e ( ) ; 
                         } 
 
                         r e t u r n   p o i n t ; 
                 } ) ; 
 
                 w r a p ( H . S e r i e s . p r o t o t y p e ,   ' d r a w D a t a L a b e l s ' ,   f u n c t i o n ( p r o c e e d )   { 
                         v a r   c s s   =   t h i s . c h a r t . o p t i o n s . d r i l l d o w n . a c t i v e D a t a L a b e l S t y l e , 
                                 r e n d e r e r   =   t h i s . c h a r t . r e n d e r e r ; 
 
                         p r o c e e d . c a l l ( t h i s ) ; 
 
                         e a c h ( t h i s . p o i n t s ,   f u n c t i o n ( p o i n t )   { 
                                 v a r   d a t a L a b e l s O p t i o n s   =   p o i n t . o p t i o n s . d a t a L a b e l s , 
                                         p o i n t C S S   =   p i c k ( 
                                                 p o i n t . d l O p t i o n s , 
                                                 d a t a L a b e l s O p t i o n s   & &   d a t a L a b e l s O p t i o n s . s t y l e ,   { } 
                                         ) ; 
 
                                 i f   ( p o i n t . d r i l l d o w n   & &   p o i n t . d a t a L a b e l )   { 
                                         i f   ( c s s . c o l o r   = = =   ' c o n t r a s t ' )   { 
                                                 p o i n t C S S . c o l o r   =   r e n d e r e r . g e t C o n t r a s t ( p o i n t . c o l o r   | |   t h i s . c o l o r ) ; 
                                         } 
                                         i f   ( d a t a L a b e l s O p t i o n s   & &   d a t a L a b e l s O p t i o n s . c o l o r )   { 
                                                 p o i n t C S S . c o l o r   =   d a t a L a b e l s O p t i o n s . c o l o r ; 
                                         } 
                                         p o i n t . d a t a L a b e l 
                                                 . a d d C l a s s ( ' h i g h c h a r t s - d r i l l d o w n - d a t a - l a b e l ' ) ; 
 
 
                                 } 
                         } ,   t h i s ) ; 
                 } ) ; 
 
 
                 v a r   a p p l y C u r s o r C S S   =   f u n c t i o n ( e l e m e n t ,   c u r s o r ,   a d d C l a s s )   { 
                         e l e m e n t [ a d d C l a s s   ?   ' a d d C l a s s '   :   ' r e m o v e C l a s s ' ] ( ' h i g h c h a r t s - d r i l l d o w n - p o i n t ' ) ; 
 
 
                 } ; 
 
                 / /   M a r k   t h e   t r a c k e r s   w i t h   a   p o i n t e r   
                 v a r   d r a w T r a c k e r W r a p p e r   =   f u n c t i o n ( p r o c e e d )   { 
                         p r o c e e d . c a l l ( t h i s ) ; 
                         e a c h ( t h i s . p o i n t s ,   f u n c t i o n ( p o i n t )   { 
                                 i f   ( p o i n t . d r i l l d o w n   & &   p o i n t . g r a p h i c )   { 
                                         a p p l y C u r s o r C S S ( p o i n t . g r a p h i c ,   ' p o i n t e r ' ,   t r u e ) ; 
                                 } 
                         } ) ; 
                 } ; 
 
                 v a r   s e t P o i n t S t a t e W r a p p e r   =   f u n c t i o n ( p r o c e e d ,   s t a t e )   { 
                         v a r   r e t   =   p r o c e e d . a p p l y ( t h i s ,   A r r a y . p r o t o t y p e . s l i c e . c a l l ( a r g u m e n t s ,   1 ) ) ; 
 
                         i f   ( t h i s . d r i l l d o w n   & &   t h i s . s e r i e s . h a l o   & &   s t a t e   = = =   ' h o v e r ' )   { 
                                 a p p l y C u r s o r C S S ( t h i s . s e r i e s . h a l o ,   ' p o i n t e r ' ,   t r u e ) ; 
                         }   e l s e   i f   ( t h i s . s e r i e s . h a l o )   { 
                                 a p p l y C u r s o r C S S ( t h i s . s e r i e s . h a l o ,   ' a u t o ' ,   f a l s e ) ; 
                         } 
                         r e t u r n   r e t ; 
                 } ; 
 
 
                 o b j e c t E a c h ( s e r i e s T y p e s ,   f u n c t i o n ( s e r i e s T y p e )   { 
                         w r a p ( s e r i e s T y p e . p r o t o t y p e ,   ' d r a w T r a c k e r ' ,   d r a w T r a c k e r W r a p p e r ) ; 
                         w r a p ( s e r i e s T y p e . p r o t o t y p e . p o i n t C l a s s . p r o t o t y p e ,   ' s e t S t a t e ' ,   s e t P o i n t S t a t e W r a p p e r ) ; 
                 } ) ; 
 
         } ( H i g h c h a r t s ) ) ; 
 } ) ) ; 
 