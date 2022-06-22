type SubscriptionWithPlan = Stripe.Subscription & {
  plan: {
    id: string;
    object: string;
    active: boolean;
    aggregate_usage: null;
    amount: number;
    amount_decimal: string;
    billing_scheme: string;
    created: number;
    currency: string;
    interval: string;
    interval_count: number;
    livemode: boolean;
    metadata: object;
    nickname: null;
    product: string;
    tiers_mode: null;
    transform_usage: null;
    trial_period_days: null;
    usage_type: string;
  };
};

export { SubscriptionWithPlan };
