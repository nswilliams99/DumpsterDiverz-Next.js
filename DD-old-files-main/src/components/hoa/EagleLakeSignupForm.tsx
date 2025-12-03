"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const signupSchema = z.object({
  full_name: z.string().min(2, 'Name must be at least 2 characters'),
  address: z.string().min(5, 'Please enter a valid address'),
  cell_phone: z.string().regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  service_type: z.enum(['start', 'end'], {
    required_error: 'Please select a service type',
  }),
  cart_size: z.enum(['96-gal', '64-gal']).optional(),
  quantity: z.string().optional(),
  last_month_of_service: z.string().optional(),
  notes: z.string().optional(),
}).superRefine((data, ctx) => {
  // Validation for Start Service
  if (data.service_type === 'start') {
    if (!data.cart_size) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please select a cart size',
        path: ['cart_size'],
      });
    }
    if (!data.quantity) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please select number of carts',
        path: ['quantity'],
      });
    }
  }
  
  // Validation for End Service
  if (data.service_type === 'end') {
    if (!data.quantity) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please select number of carts',
        path: ['quantity'],
      });
    }
    if (!data.last_month_of_service) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please select last month of service',
        path: ['last_month_of_service'],
      });
    }
  }
});

type SignupFormData = z.infer<typeof signupSchema>;

const cartPricing = {
  '96-gal': 25.76,
  '64-gal': 23.70,
};

// Generate next 12 months for the month selector
const generateMonthOptions = () => {
  const months = [];
  const currentDate = new Date();
  
  for (let i = 0; i < 12; i++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1);
    const monthName = date.toLocaleDateString('en-US', { month: 'long' });
    months.push(monthName);
  }
  
  return months;
};

const EagleLakeSignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      quantity: '1',
    },
  });

  const selectedCartSize = watch('cart_size');
  const selectedServiceType = watch('service_type');
  const selectedQuantity = watch('quantity');
  const selectedLastMonth = watch('last_month_of_service');

  const calculateTotal = () => {
    if (selectedCartSize && selectedQuantity) {
      const pricePerCart = cartPricing[selectedCartSize];
      const qty = parseInt(selectedQuantity, 10);
      return (pricePerCart * qty).toFixed(2);
    }
    return '0.00';
  };

  const onSubmit = async (data: SignupFormData) => {
    setIsSubmitting(true);

    try {
      const cartPrice = data.cart_size ? cartPricing[data.cart_size] : null;
      const quantity = data.quantity ? parseInt(data.quantity, 10) : null;
      const totalPrice = cartPrice && quantity ? cartPrice * quantity : null;

      const { error } = await (supabase as any).from('hoa_signups').insert({
        full_name: data.full_name,
        address: data.address,
        cell_phone: data.cell_phone,
        email: data.email,
        service_type: data.service_type,
        cart_size: data.cart_size || null,
        cart_price: cartPrice,
        quantity: quantity,
        total_monthly_price: totalPrice,
        last_month_of_service: data.last_month_of_service || null,
        notes: data.notes || null,
      });

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Signup Successful!",
        description: "We've received your request. Our team will contact you shortly.",
      });
      reset();
    } catch (error) {
      console.error('Error submitting signup:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error processing your request. Please try again or call us at 970-888-7274.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-12 pb-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-professional-dark mb-4 font-poppins">
            Thank You for Signing Up!
          </h3>
          <p className="text-professional-medium mb-6 font-inter">
            We've received your signup request for Eagle Lake Association. Our team will contact you within 1-2 business days to confirm your service.
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            className="bg-primary-pink hover:bg-primary-pink/90 font-semibold"
          >
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-professional-dark font-poppins">
          Eagle Lake Association Signup
        </CardTitle>
        <CardDescription className="text-lg font-inter">
          Complete this form to start or end your trash service
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="full_name" className="text-professional-dark font-semibold">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="full_name"
              {...register('full_name')}
              placeholder="John Smith"
              className={errors.full_name ? 'border-red-500' : ''}
            />
            {errors.full_name && (
              <p className="text-sm text-red-500">{errors.full_name.message}</p>
            )}
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address" className="text-professional-dark font-semibold">
              Service Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="address"
              {...register('address')}
              placeholder="123 Eagle Lake Drive, Windsor, CO 80550"
              className={errors.address ? 'border-red-500' : ''}
            />
            {errors.address && (
              <p className="text-sm text-red-500">{errors.address.message}</p>
            )}
          </div>

          {/* Cell Phone */}
          <div className="space-y-2">
            <Label htmlFor="cell_phone" className="text-professional-dark font-semibold">
              Cell Phone <span className="text-red-500">*</span>
            </Label>
            <Input
              id="cell_phone"
              {...register('cell_phone')}
              placeholder="(970) 555-1234"
              type="tel"
              className={errors.cell_phone ? 'border-red-500' : ''}
            />
            {errors.cell_phone && (
              <p className="text-sm text-red-500">{errors.cell_phone.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-professional-dark font-semibold">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              {...register('email')}
              placeholder="john.smith@email.com"
              type="email"
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Service Type */}
          <div className="space-y-3">
            <Label className="text-professional-dark font-semibold">
              Service Type <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={selectedServiceType}
              onValueChange={(value) => setValue('service_type', value as 'start' | 'end')}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <RadioGroupItem value="start" id="start" />
                <Label htmlFor="start" className="flex-1 cursor-pointer font-inter">
                  <span className="font-semibold">Start Service</span>
                  <p className="text-sm text-gray-600">Begin weekly trash pickup</p>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <RadioGroupItem value="end" id="end" />
                <Label htmlFor="end" className="flex-1 cursor-pointer font-inter">
                  <span className="font-semibold">End Service</span>
                  <p className="text-sm text-gray-600">Cancel weekly trash pickup</p>
                </Label>
              </div>
            </RadioGroup>
            {errors.service_type && (
              <p className="text-sm text-red-500">{errors.service_type.message}</p>
            )}
          </div>

          {/* Cart Size Selection (only show if starting service) */}
          {selectedServiceType === 'start' && (
            <div className="space-y-3">
              <Label className="text-professional-dark font-semibold">
                Cart Size <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={selectedCartSize}
                onValueChange={(value) => setValue('cart_size', value as '96-gal' | '64-gal')}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-3 p-4 border-2 rounded-lg hover:bg-gray-50 transition-all cursor-pointer hover:border-primary-pink">
                  <RadioGroupItem value="96-gal" id="96-gal" />
                  <Label htmlFor="96-gal" className="flex-1 cursor-pointer font-inter">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-semibold text-lg">96-Gallon Cart</span>
                        <p className="text-sm text-gray-600">Recommended for families of 4+</p>
                        <p className="text-xs text-green-600 mt-1">✓ Includes matching 96-gal recycling cart</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-primary-pink">$25.76</span>
                        <p className="text-xs text-gray-500">per month</p>
                      </div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 border-2 rounded-lg hover:bg-gray-50 transition-all cursor-pointer hover:border-primary-pink">
                  <RadioGroupItem value="64-gal" id="64-gal" />
                  <Label htmlFor="64-gal" className="flex-1 cursor-pointer font-inter">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-semibold text-lg">64-Gallon Cart</span>
                        <p className="text-sm text-gray-600">Perfect for smaller households</p>
                        <p className="text-xs text-green-600 mt-1">✓ Includes matching 64-gal recycling cart</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-primary-pink">$23.70</span>
                        <p className="text-xs text-gray-500">per month</p>
                      </div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
              {errors.cart_size && (
                <p className="text-sm text-red-500">{errors.cart_size.message}</p>
              )}
            </div>
          )}

          {/* Quantity Selection (show for both start and end service) */}
          {(selectedServiceType === 'start' || selectedServiceType === 'end') && (
            <div className="space-y-2">
              <Label htmlFor="quantity" className="text-professional-dark font-semibold">
                Number of Carts <span className="text-red-500">*</span>
              </Label>
              <Select
                value={selectedQuantity}
                onValueChange={(value) => setValue('quantity', value)}
              >
                <SelectTrigger className={errors.quantity ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select number of carts" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} Cart{num > 1 ? 's' : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.quantity && (
                <p className="text-sm text-red-500">{errors.quantity.message}</p>
              )}
              <p className="text-xs text-gray-500">Maximum 10 carts per address</p>
            </div>
          )}

          {/* Last Month of Service (only show for end service) */}
          {selectedServiceType === 'end' && (
            <div className="space-y-2">
              <Label htmlFor="last_month_of_service" className="text-professional-dark font-semibold">
                Last Month of Service <span className="text-red-500">*</span>
              </Label>
              <Select
                value={selectedLastMonth}
                onValueChange={(value) => setValue('last_month_of_service', value)}
              >
                <SelectTrigger className={errors.last_month_of_service ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select final service month" />
                </SelectTrigger>
                <SelectContent>
                  {generateMonthOptions().map((month) => (
                    <SelectItem key={month} value={month}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.last_month_of_service && (
                <p className="text-sm text-red-500">{errors.last_month_of_service.message}</p>
              )}
              <p className="text-xs text-gray-500">Select the last month you want service</p>
            </div>
          )}

          {/* Total Price Display (only show if cart size and quantity selected) */}
          {selectedServiceType === 'start' && selectedCartSize && selectedQuantity && (
            <div className="bg-gradient-to-r from-primary-pink/10 to-diverz-purple/10 border-2 border-primary-pink/30 rounded-xl p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600 font-inter mb-1">Total Monthly Price</p>
                  <p className="text-xs text-gray-500 font-inter">
                    {selectedQuantity} × {selectedCartSize} cart{parseInt(selectedQuantity) > 1 ? 's' : ''} @ ${cartPricing[selectedCartSize]}/month each
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-primary-pink font-poppins">${calculateTotal()}</p>
                  <p className="text-sm text-gray-600 font-inter">per month</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-xs text-green-600 font-inter">
                  ✓ Includes {selectedQuantity} matching recycling cart{parseInt(selectedQuantity) > 1 ? 's' : ''}
                </p>
              </div>
            </div>
          )}

          {/* Additional Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-professional-dark font-semibold">
              Additional Notes (Optional)
            </Label>
            <Textarea
              id="notes"
              {...register('notes')}
              placeholder="Any special instructions or questions..."
              rows={3}
              className="resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-pink hover:bg-primary-pink/90 text-white font-bold py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Signup Request'
            )}
          </Button>

          <p className="text-sm text-center text-gray-500 font-inter">
            Questions? Call us at{' '}
            <a href="tel:970-888-7274" className="text-primary-pink hover:underline font-semibold">
              970-888-7274
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default EagleLakeSignupForm;
