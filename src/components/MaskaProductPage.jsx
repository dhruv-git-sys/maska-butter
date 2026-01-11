import React, { useState, useEffect } from 'react';
import { Star, TrendingUp, Users, MessageCircle, ThumbsUp, Award, Clock, ShoppingCart, Heart, Share2, MapPin, Check, Zap, Package, Truck, Shield } from 'lucide-react';

const MaskaProductPage = () => {
  const [activeVariation, setActiveVariation] = useState('social');
  const [quantity, setQuantity] = useState(1);
  const [liveViewers, setLiveViewers] = useState(47);
  const [recentPurchases, setRecentPurchases] = useState(12);
  const [activeImage, setActiveImage] = useState(0);
  const [helpfulVotes, setHelpfulVotes] = useState({});

  useEffect(() => {
    const viewerInterval = setInterval(() => {
      setLiveViewers(prev => Math.max(30, prev + Math.floor(Math.random() * 5) - 2));
    }, 3000);

    const purchaseInterval = setInterval(() => {
      setRecentPurchases(prev => prev + 1);
    }, 8000);

    return () => {
      clearInterval(viewerInterval);
      clearInterval(purchaseInterval);
    };
  }, []);

  const productImages = [
    { color: 'bg-gradient-to-br from-orange-400 to-red-500' },
    { color: 'bg-gradient-to-br from-amber-400 to-orange-500' },
    { color: 'bg-gradient-to-br from-yellow-400 to-amber-500' }
  ];

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, MH",
      rating: 5,
      date: "2 days ago",
      verified: true,
      comment: "Best peanut butter I've ever tasted! The chatpata flavor is absolutely amazing. Perfect blend of spices makes my morning toast so much better. My kids love it too!",
      helpful: 24,
      image: "PS",
      purchase: "Verified Purchase"
    },
    {
      id: 2,
      name: "Arjun Patel",
      location: "Bangalore, KA",
      rating: 5,
      date: "1 week ago",
      verified: true,
      comment: "High protein content and incredible taste! Been using it post-workout and it's perfect. No added sugar, just pure goodness. Highly recommended for fitness enthusiasts.",
      helpful: 18,
      image: "AP",
      purchase: "Verified Purchase"
    },
    {
      id: 3,
      name: "Sneha Iyer",
      location: "Chennai, TN",
      rating: 4,
      date: "3 days ago",
      verified: true,
      comment: "Love the spicy twist on traditional peanut butter! The texture is creamy and the chatpata masala flavor is unique. Though I wish it came in a bigger jar. Will definitely buy again!",
      helpful: 15,
      image: "SI",
      purchase: "Verified Purchase"
    },
    {
      id: 4,
      name: "Rahul Mehta",
      location: "Delhi, DL",
      rating: 5,
      date: "5 days ago",
      verified: true,
      comment: "Finally, a desi twist to peanut butter! Perfect for Indian palate. Goes great with parathas and rotis. My whole family is hooked!",
      helpful: 21,
      image: "RM",
      purchase: "Verified Purchase"
    }
  ];

  const handleHelpful = (reviewId) => {
    setHelpfulVotes(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  const SocialProofVariation = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 rounded-3xl p-6 shadow-lg border-2 border-orange-200">
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
            </div>
            <div className="text-3xl font-bold text-green-600">{liveViewers}</div>
            <div className="text-sm text-gray-600 font-medium">Viewing Now</div>
          </div>
          <div className="text-center">
            <ShoppingCart className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-blue-600">{recentPurchases}</div>
            <div className="text-sm text-gray-600 font-medium">Sold Today</div>
          </div>
          <div className="text-center">
            <Star className="w-6 h-6 text-amber-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-amber-600">4.8</div>
            <div className="text-sm text-gray-600 font-medium">Avg Rating</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Customer Reviews</h3>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-lg text-gray-600 font-medium">Based on 2,847 reviews</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-400 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-2xl shadow-lg">
            4.8/5
          </div>
        </div>
        
        <div className="space-y-3">
          {[5,4,3,2,1].map(star => {
            const percentage = star === 5 ? 78 : star === 4 ? 15 : star === 3 ? 5 : 2;
            return (
              <div key={star} className="flex items-center gap-4">
                <div className="flex items-center gap-2 w-20">
                  <span className="text-sm font-bold text-gray-700">{star}</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-amber-400 to-orange-500 h-full rounded-full transition-all duration-700"
                    style={{width: `${percentage}%`}}
                  />
                </div>
                <span className="text-sm font-medium text-gray-600 w-16 text-right">{percentage}%</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0">
                {review.image}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-gray-900 text-lg">{review.name}</span>
                      {review.verified && (
                        <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{review.location}</span>
                      <span>•</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{review.comment}</p>
                <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                  <button 
                    onClick={() => handleHelpful(review.id)}
                    className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                      helpfulVotes[review.id] 
                        ? 'text-orange-600' 
                        : 'text-gray-600 hover:text-orange-600'
                    }`}
                  >
                    <ThumbsUp className={`w-4 h-4 ${helpfulVotes[review.id] ? 'fill-orange-600' : ''}`} />
                    <span>Helpful ({review.helpful + (helpfulVotes[review.id] ? 1 : 0)})</span>
                  </button>
                  <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 font-medium transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>Reply</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ModernGridVariation = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-3xl p-6 shadow-xl">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-8 h-8" />
          <div>
            <div className="text-sm font-semibold opacity-90">🔥 TRENDING NOW</div>
            <div className="text-2xl font-bold">What Our Customers Say</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-5xl font-bold">4.8</div>
          <div className="flex gap-1 mt-1">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-5 h-5 fill-white text-white" />
            ))}
          </div>
          <div className="text-sm opacity-90 mt-1">2,847 reviews</div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border-2 border-green-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
            <span className="font-semibold text-gray-800">{liveViewers} people viewing right now</span>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-amber-600" />
            <span className="font-semibold text-gray-800">#1 Best Seller in Peanut Butter</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
            <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-5">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {review.image}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900 text-lg">{review.name}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-3 h-3" />
                    <span>{review.location}</span>
                  </div>
                  <div className="flex gap-1 mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  {review.purchase}
                </span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-5">{review.comment}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button 
                  onClick={() => handleHelpful(review.id)}
                  className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                    helpfulVotes[review.id] 
                      ? 'text-orange-600' 
                      : 'text-gray-600 hover:text-orange-600'
                  }`}
                >
                  <ThumbsUp className={`w-4 h-4 ${helpfulVotes[review.id] ? 'fill-orange-600' : ''}`} />
                  Helpful ({review.helpful + (helpfulVotes[review.id] ? 1 : 0)})
                </button>
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 font-semibold transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const TimelineVariation = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 text-white rounded-3xl p-10 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-5xl font-bold mb-3">Real Reviews from Real People</h2>
            <p className="text-xl text-orange-100">Join 2,847+ happy customers</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 text-center">
            <div className="text-7xl font-bold">4.8</div>
            <div className="flex justify-center gap-1 mt-3">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-7 h-7 fill-white text-white" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
        <div className="flex items-center justify-around">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-green-600" />
            <span className="font-bold text-gray-800">Sarah from Mumbai ordered 2 mins ago</span>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-amber-600" />
            <span className="font-bold text-gray-800">#1 Best Seller in Peanut Butter</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-orange-600" />
            <span className="font-bold text-gray-800">{recentPurchases} sold today</span>
          </div>
        </div>
      </div>

      <div className="relative">
        {reviews.map((review, idx) => (
          <div key={review.id} className="flex gap-6 mb-8 relative">
            {idx < reviews.length - 1 && (
              <div className="absolute left-7 top-20 w-0.5 h-full bg-gradient-to-b from-orange-300 to-amber-300"></div>
            )}
            
            <div className="relative z-10 flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-lg shadow-xl border-4 border-white">
                {review.image}
              </div>
            </div>

            <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold text-gray-900 text-xl">{review.name}</span>
                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{review.location}</span>
                    <span>•</span>
                    <span>{review.date}</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-5">{review.comment}</p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <button 
                  onClick={() => handleHelpful(review.id)}
                  className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                    helpfulVotes[review.id] 
                      ? 'text-orange-600' 
                      : 'text-gray-600 hover:text-orange-600'
                  }`}
                >
                  <ThumbsUp className={`w-5 h-5 ${helpfulVotes[review.id] ? 'fill-orange-600' : ''}`} />
                  {review.helpful + (helpfulVotes[review.id] ? 1 : 0)}
                </button>
                <button className="text-sm text-gray-600 hover:text-orange-600 font-semibold transition-colors">
                  Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className={`${productImages[activeImage].color} rounded-3xl h-96 flex items-center justify-center shadow-2xl`}>
                <div className="text-white text-center p-8">
                  <div className="text-6xl font-bold mb-4">Maska</div>
                  <div className="text-3xl font-semibold">Peanut Butter</div>
                  <div className="text-2xl mt-2">Chatpata Flavor</div>
                </div>
              </div>
              <div className="flex gap-4">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`${img.color} rounded-xl h-24 flex-1 transition-all duration-300 ${
                      activeImage === idx ? 'ring-4 ring-orange-500 scale-105' : 'opacity-60 hover:opacity-100'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    BESTSELLER
                  </span>
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    TRENDING
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                  Maska Peanut Butter - Chatpata
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="font-bold text-gray-900">4.8</span>
                  </div>
                  <span className="text-gray-600">(2,847 reviews)</span>
                  <span className="text-green-600 font-semibold">✓ In Stock</span>
                </div>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-gray-900">₹349</span>
                <span className="text-2xl text-gray-400 line-through">₹499</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                  Save 30%
                </span>
              </div>

              <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 text-orange-800">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold">Limited Time Offer - Ends in 23:45:12</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: "100% Natural" },
                  { icon: Zap, text: "High Protein" },
                  { icon: Award, text: "No Added Sugar" },
                  { icon: Package, text: "500g Pack" }
                ].map((feature, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                    <span className="font-semibold text-gray-800">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-gray-700">Quantity:</span>
                  <div className="flex items-center border-2 border-gray-300 rounded-xl overflow-hidden">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-5 py-3 bg-gray-100 hover:bg-gray-200 font-bold text-xl transition-colors"
                    >
                      -
                    </button>
                    <span className="px-6 py-3 font-bold text-lg">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-5 py-3 bg-gray-100 hover:bg-gray-200 font-bold text-xl transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-orange-600 to-amber-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105">
                    <ShoppingCart className="w-6 h-6" />
                    Add to Cart
                  </button>
                  <button className="bg-white border-2 border-gray-300 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <Heart className="w-6 h-6 text-gray-600" />
                  </button>
                  <button className="bg-white border-2 border-gray-300 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <Share2 className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-5 flex items-start gap-4">
                <Truck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-blue-900 mb-1">Free Delivery</div>
                  <div className="text-sm text-blue-800">Order above ₹500 • Delivery in 2-3 days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveVariation('social')}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all ${
              activeVariation === 'social'
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            Social Proof Heavy
          </button>
          <button
            onClick={() => setActiveVariation('grid')}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all ${
              activeVariation === 'grid'
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            Modern Grid
          </button>
          <button
            onClick={() => setActiveVariation('timeline')}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all ${
              activeVariation === 'timeline'
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            Timeline Style
          </button>
        </div>

        {activeVariation === 'social' && <SocialProofVariation />}
        {activeVariation === 'grid' && <ModernGridVariation />}
        {activeVariation === 'timeline' && <TimelineVariation />}
      </div>
    </div>
  );
};

export default MaskaProductPage;