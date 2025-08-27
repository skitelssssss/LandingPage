import { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  Collapse,
  Divider,
  Avatar,
} from '@mui/material';
import { CheckCircleOutline, ExpandMore } from '@mui/icons-material';

import SubCard from 'ui-component/cards/SubCard';

export default function PricingCard({ plan, bgColor }) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <SubCard
      sx={{
        bgcolor: bgColor,
        borderRadius: 13,
        textAlign: 'left',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'all 0.3s',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: 10,
          '& .expand-icon': { transform: 'rotate(180deg)' }
        }
      }}
    >
      <Box sx={{ p: 2.5 }}>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              variant="rounded"
              sx={{
                bgcolor: 'background.paper',
                height: 56,
                width: 56,
                borderRadius: '12px',
                boxShadow: 3
              }}
            >
              {plan.icon}
            </Avatar>
            <Box>
              <Typography variant="h2" fontWeight={700} color="text.primary" sx={{fontSize: '1rem'}}>
                {plan.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {plan.users}
              </Typography>
            </Box>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            {plan.subtitle}
          </Typography>

          <Typography variant="body2" fontWeight={600}>
            {plan.price}
          </Typography>

          <Stack component="ul" spacing={1} sx={{ listStyle: 'none', p: 0, m: 0 }}>
            {plan.shortFeatures.map((feature, idx) => (
              <Stack
                key={idx}
                component="li"
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ fontSize: '0.875rem' }}
              >
                <CheckCircleOutline fontSize="small" sx={{ color: 'secondary.main' }} />
                <Typography variant="body2" color="text.primary">
                  {feature}
                </Typography>
              </Stack>
            ))}
          </Stack>

          <Button
            onClick={handleToggle}
            sx={{
              mt: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              color: 'text.primary',
              fontWeight: 600,
              textTransform: 'none',
              justifyContent: 'flex-start',
              transition: 'all 0.3s',
              '&:hover': {
                color: 'secondary.dark',
                textDecoration: 'underline',
                bgcolor: 'transparent'
              },
              '& .expand-icon': {
                transition: 'all 0.3s',
                transform: expanded ? 'rotate(180deg)' : 'rotate(0)'
              }
            }}
            endIcon={
              <ExpandMore
                className="expand-icon"
                sx={{
                  color: 'text.primary',
                  fontSize: '1.5rem',
                  transition: 'color 0.3s',
                  '&:hover': { color: 'secondary.dark' }
                }}
              />
            }
          >
            {expanded ? 'Скрыть подробности' : 'Узнать больше'}
          </Button>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography variant="body2" fontWeight={600} gutterBottom color="text.primary">
              Подробное описание: {plan.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
              {plan.description}
            </Typography>
            <Divider sx={{ my: 1.5 }} />
            <Typography variant="body2" fontWeight={600} gutterBottom color="text.primary">
              Возможности:
            </Typography>
            <Stack component="ul" spacing={1} sx={{ pl: 2 }}>
              {plan.features.map((feature, idx) => (
                <Typography
                  key={idx}
                  component="li"
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: '0.875rem', lineHeight: 1.6 }}
                >
                  {feature}
                </Typography>
              ))}
            </Stack>
          </Collapse>
        </Stack>
      </Box>
    </SubCard>
  );
}